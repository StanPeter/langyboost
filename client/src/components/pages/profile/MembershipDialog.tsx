import { keyframes, styled } from '@mui/material/styles';
import americanExpress from 'assets/images/americanExpress.png';
import kingPoint from 'assets/images/kingPoint.png';
import mastercard from 'assets/images/mastercard.png';
import paypal from 'assets/images/paypal.png';
import peonPoint from 'assets/images/peonPoint.png';
import visa from 'assets/images/visa.png';
import Button from 'components/UI/Button';
import Dialog from 'components/UI/Dialog';
import Image from 'components/UI/Image';
import React, { FormEvent, useEffect, useState } from 'react';
import { SectionStyles } from 'ts/interfaces';
import {
    MembershipDialogSectionTypes,
    MembershipTypes,
    PaymentDetailsTypes,
    paymentMethodTypes,
    PaymentMethodTypes,
    SubscriptionTypes,
} from 'ts/types';

// Animation keyframes
const slideTop = keyframes`
  0% { transform: translateY(0); opacity: 0.8; }
  100% { transform: translateY(-150px); opacity: 1; }
`;

// Main container
const DialogContainer = styled('div')({
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    flexFlow: 'column',
    alignItems: 'center',
});

// Header section
const DialogHeader = styled('header')(({ theme }) => ({
    width: '100%',
    height: '9rem',
    backgroundColor: theme.palette.primary.main,
    borderRadius: '25px 25px 0 0',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    '& h4': {
        width: '95%',
        color: theme.palette.primary.contrastText,
    },
}));

const DialogSeparator = styled('hr')(({ theme }) => ({
    width: '80%',
    border: `1px solid ${theme.palette.secondary.dark}`,
    margin: '2.5rem 0',
}));

// Membership cards
const CardsWrapper = styled('div')<{ $animate: boolean }>(({ theme, $animate }) => ({
    display: 'flex',
    flexFlow: 'row',
    justifyContent: 'space-between',
    width: '100%',
    transition: 'opacity 500ms ease-in-out',
    animation: $animate ? `${slideTop} 0.4s ease-in-out reverse` : 'none',
}));

const CardWrapper = styled('div')<{ $isChosen: boolean; $type: 'peon' | 'king' }>(({ theme, $isChosen, $type }) => ({
    border: $isChosen ? '10px solid rgba(133, 205, 202, 0.7)' : `1px solid ${theme.palette.secondary.dark}`,
    borderRadius: '15px',
    position: 'relative',
    margin: $isChosen ? 0 : '0.5%',
    width: '48%',
    maxWidth: '48%',
    minWidth: '48%',
    cursor: 'pointer',

    '&::after': {
        content: '""',
        backgroundImage: `url(${$type === 'peon' ? peonPoint : kingPoint})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        opacity: 0.4,
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: -1,
        borderRadius: '15px',
    },

    '& h2': {
        color: theme.palette.secondary.dark,
        margin: '1rem 0',
    },
}));

// Privileges components
const PrivilegesContainer = styled('div')({
    margin: '0.5rem',
});

const PrivilegesWrapper = styled('div')({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',

    '& img': {
        width: '20px',
        height: '20px',
    },

    '& p': {
        marginLeft: '0.5rem',
    },
});

// Payment methods
const PaymentMethodsWrapper = styled('div')(({ theme }) => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexFlow: 'row',

    '& img': {
        margin: '0.5rem',
        height: '4rem',
        width: '6.5rem',
        cursor: 'pointer',
    },
}));

const ChosenMethod = styled('div')(({ theme }) => ({
    border: '10px solid rgba(133, 205, 202, 0.7)',
}));

// Payment details
const PaymentCardWrapper = styled('div')({
    padding: '0 2rem',
    width: '100%',
});

const PaymentCardDetails = styled('div')(({ theme }) => ({
    border: `1px solid ${theme.palette.secondary.dark}`,
    borderRadius: '5px',

    '& input': {
        fontSize: '1.1rem',
        height: '44px',
        color: theme.palette.text.primary,
        padding: '8px',
        appearance: 'none',
        border: 'none',
        width: '100%',
        background: 'none',
        textAlign: 'center',

        '&::-webkit-outer-spin-button, &::-webkit-inner-spin-button': {
            '-webkit-appearance': 'none',
            margin: 0,
        },

        '&[type="number"]': {
            '-moz-appearance': 'textfield',
        },
    },

    '& img': {
        width: '52px',
        height: '44px',
        padding: '8px',
    },
}));

const FlexAlign = styled('div')<{ $isSeparator?: boolean }>(({ theme, $isSeparator }) => ({
    display: 'flex',
    alignItems: 'center',
    flexFlow: 'row',
    borderLeft: $isSeparator ? `1px solid ${theme.palette.secondary.dark}` : 'none',
    borderRight: $isSeparator ? `1px solid ${theme.palette.secondary.dark}` : 'none',
}));

// Picked choice indicator
const PickedChoice = styled('div')(({ theme }) => ({
    fontWeight: 700,
    fontSize: '25px',
    letterSpacing: '0.1em',
    color: theme.palette.secondary.dark,
    textShadow: `
    -1px 0 ${theme.palette.text.primary},
    0 1px ${theme.palette.text.primary},
    1px 0 ${theme.palette.text.primary},
    0 -1px ${theme.palette.text.primary}
  `,
    border: `1px solid ${theme.palette.secondary.dark}`,
    borderRadius: '50%',
    padding: '6px',
}));

// Rest of the component implementation remains the same, using these styled components
// ... (keep all the existing logic and state management) ...

const peonText = ['Can access all courses', 'Can review courses', 'Can access some materials', 'Can join a club'];

const kingText = ['All privileges as peon', 'Can create courses', 'Can access all materials', 'Can create a club'];

type MembershipDialogProps = {
    hideFunction: () => void;
};

const MembershipDialog: React.FC<MembershipDialogProps> = ({ hideFunction }) => {
    /* HOOKS */
    /* value states */
    const [membership, setMembership] = useState<MembershipTypes | null>(null);
    const [subscription, setSubscription] = useState<SubscriptionTypes>({
        period: null,
        repeatPayment: 'no',
    });
    const [paymentMethod, setPaymentMethod] = useState<PaymentMethodTypes>();
    const [paymentDetails, setPaymentDetails] = useState<PaymentDetailsTypes>({
        name: 'Nadia Hayden',
        cardDetails: '1758897574895478',
        cardSecretNums: '748',
        dateOfExpiration: '252025',
    });
    /*general states */
    const [showedSection, setShowedSection] = useState<MembershipDialogSectionTypes>('membership');
    const [showedSectionHelper, setShowedSectionHelper] = useState<MembershipDialogSectionTypes>('membership');
    const [firstRender, setFirstRender] = useState<boolean>(true);
    const [existingSections, setExistingSections] = useState<MembershipDialogSectionTypes[]>(['membership']);
    const [sectionStyles, setSectionStyles] = useState<SectionStyles>({
        membership: { opacity: 1 },
        paymendMethod: { display: 'none' },
        paymentDetails: { display: 'none' },
        subscription: { display: 'none' },
    });

    // handles each change of the chosen section, rsponsible for animaation like effects and state
    useEffect(() => {
        if (
            showedSectionHelper !==
            Object.keys(sectionStyles).filter(section => sectionStyles[section as keyof SectionStyles].opacity === 1)[0]
        ) {
            if (!existingSections.includes(showedSectionHelper)) {
                setExistingSections([...existingSections, showedSectionHelper]);
                if (showedSectionHelper === 'subscription') setFirstRender(false);
            }

            const newStyles = {
                ...sectionStyles,
                [showedSectionHelper]: { opacity: 1 },
            };
            const previousOpenedSections = Object.keys(newStyles).filter(
                section =>
                    sectionStyles[section as keyof SectionStyles].opacity === 1 && section !== showedSectionHelper,
            );

            //first set opacity to zero so that transition animation can happen
            previousOpenedSections.forEach(section => {
                newStyles[section as keyof SectionStyles] = { opacity: 0 };
            });

            setSectionStyles({ ...newStyles });

            //then set display to none so that it can dissappear from DOM
            previousOpenedSections.forEach(section => {
                newStyles[section as keyof SectionStyles] = { display: 'none' };
            });

            const timer = setTimeout(() => {
                setSectionStyles({ ...newStyles });
            }, 500);

            const timer2 = setTimeout(() => {
                setShowedSection(showedSectionHelper);
            }, 600);

            return () => {
                clearTimeout(timer);
                clearTimeout(timer2);
            };
        }
        return;
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [showedSectionHelper]);

    // /* HANDLERS */
    // handles each click where a value is set
    const onChangeHandler = (e: MouseEvent | FormEvent, section: MembershipDialogSectionTypes, value: any) => {
        e.preventDefault();

        switch (section) {
            case 'membership':
                if (['king', 'peon'].includes(value)) {
                    setMembership(value);
                    setShowedSectionHelper('subscription');
                } else alert('INVALID VALUE');
                break;
            case 'subscription':
                if (subscription.period && subscription.repeatPayment) {
                    setShowedSectionHelper('paymendMethod');
                } else alert('BUTTON SHOULD NOT BE ENABLED');
                break;
            case 'paymendMethod':
                if (paymentMethodTypes.includes(value)) {
                    setPaymentMethod(value);
                    setShowedSectionHelper('paymentDetails');
                } else alert('INVALID VALUE');
                break;
            case 'paymentDetails':
                console.log('SUBMITTED');
                hideFunction();
        }
    };

    const isDisabledSubmitBtn = () => {
        if (
            membership &&
            subscription.period &&
            subscription.repeatPayment &&
            paymentMethod &&
            paymentDetails.cardDetails &&
            paymentDetails.cardSecretNums &&
            paymentDetails.dateOfExpiration &&
            paymentDetails.name
        )
            return false;
        return true;
    };

    return (
        <Dialog
            title="Membership"
            submitBtn={{
                text: 'Finish payment',
                useCase: 'big',

                onSubmit: () => onChangeHandler({ preventDefault: () => {} } as FormEvent, 'paymentDetails', null),
            }}
            content={
                <DialogContainer>
                    <DialogHeader>
                        <h4>Get a membership to finally reach your dreams and learn the desired language!</h4>
                    </DialogHeader>
                    <DialogSeparator />

                    {/* Membership cards section */}
                    {existingSections.includes('membership') && (
                        <section>
                            <h4
                                onClick={() =>
                                    setShowedSectionHelper(
                                        showedSection === 'membership' ? 'subscription' : 'membership',
                                    )
                                }
                            >
                                Pick your membership
                                {membership && <PickedChoice>{membership}</PickedChoice>}
                            </h4>
                            <CardsWrapper $animate={firstRender} style={sectionStyles.membership}>
                                <CardWrapper
                                    $isChosen={membership === 'peon'}
                                    $type="peon"
                                    onClick={e => onChangeHandler(e, 'membership', 'peon')}
                                >
                                    <h2>Peon</h2>
                                    <hr />
                                    <PrivilegesContainer>
                                        {peonText.map((text, index) => (
                                            <PrivilegesWrapper key={index}>
                                                <Image src={peonPoint} alt="peonPoint" />
                                                <p>{text}</p>
                                            </PrivilegesWrapper>
                                        ))}
                                    </PrivilegesContainer>
                                </CardWrapper>

                                <CardWrapper
                                    $isChosen={membership === 'king'}
                                    $type="king"
                                    onClick={e => onChangeHandler(e, 'membership', 'king')}
                                >
                                    <h2>King</h2>
                                    <hr />
                                    <PrivilegesContainer>
                                        {kingText.map((text, index) => (
                                            <PrivilegesWrapper key={index}>
                                                <Image src={kingPoint} alt="kingPoint" />
                                                <p>{text}</p>
                                            </PrivilegesWrapper>
                                        ))}
                                    </PrivilegesContainer>
                                </CardWrapper>
                            </CardsWrapper>
                        </section>
                    )}

                    {/* Payment methods section */}
                    {existingSections.includes('paymendMethod') && (
                        <section>
                            <DialogSeparator />
                            <h4
                                onClick={() =>
                                    setShowedSectionHelper(
                                        showedSection === 'paymendMethod' ? 'paymentDetails' : 'paymendMethod',
                                    )
                                }
                            >
                                Payment method
                                {paymentMethod && <PickedChoice>{paymentMethod}</PickedChoice>}
                            </h4>
                            <PaymentMethodsWrapper style={sectionStyles.paymendMethod}>
                                <div onClick={e => onChangeHandler(e, 'paymendMethod', 'visa')}>
                                    <Image src={visa} alt="visa" />
                                </div>
                                <div onClick={e => onChangeHandler(e, 'paymendMethod', 'mastercard')}>
                                    <Image src={mastercard} alt="mastercard" />
                                </div>
                                <div onClick={e => onChangeHandler(e, 'paymendMethod', 'americanExpress')}>
                                    <Image src={americanExpress} alt="americanExpress" />
                                </div>
                                <div onClick={e => onChangeHandler(e, 'paymendMethod', 'paypal')}>
                                    <Image src={paypal} alt="paypal" />
                                </div>
                            </PaymentMethodsWrapper>
                        </section>
                    )}

                    {/* Payment details section */}
                    {existingSections.includes('paymentDetails') && (
                        <section>
                            <DialogSeparator />
                            <h4>Payment details</h4>
                            <PaymentCardWrapper style={sectionStyles.paymentDetails}>
                                <PaymentCardDetails>
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="Name"
                                        value={paymentDetails.name}
                                        onChange={e => setPaymentDetails({ ...paymentDetails, name: e.target.value })}
                                    />
                                    <FlexAlign>
                                        <input
                                            type="number"
                                            placeholder="Exp. date"
                                            name="dateOfExpiration"
                                            value={paymentDetails.dateOfExpiration}
                                            onChange={e =>
                                                setPaymentDetails({
                                                    ...paymentDetails,
                                                    dateOfExpiration: e.target.value,
                                                })
                                            }
                                        />
                                        <FlexAlign $isSeparator>
                                            <Image
                                                src="https://seeklogo.com/images/V/Visa-logo-C690BE33FD-seeklogo.com.png"
                                                alt="visaImg"
                                            />
                                            <input
                                                type="number"
                                                placeholder="Card number"
                                                name="cardDetails"
                                                value={paymentDetails.cardDetails}
                                                onChange={e =>
                                                    setPaymentDetails({
                                                        ...paymentDetails,
                                                        cardDetails: e.target.value,
                                                    })
                                                }
                                            />
                                        </FlexAlign>
                                        <input
                                            type="number"
                                            placeholder="CVV"
                                            name="cardSecretNums"
                                            value={paymentDetails.cardSecretNums}
                                            onChange={e =>
                                                setPaymentDetails({ ...paymentDetails, cardSecretNums: e.target.value })
                                            }
                                        />
                                    </FlexAlign>
                                </PaymentCardDetails>
                            </PaymentCardWrapper>
                        </section>
                    )}

                    {/* Submit button */}
                    <Button
                        text="SUBMIT"
                        useCase="primary"
                        disabled={isDisabledSubmitBtn()}
                        onClick={() =>
                            onChangeHandler({ preventDefault: () => {} } as FormEvent, 'paymentDetails', null)
                        }
                    />
                </DialogContainer>
            }
            hideFunction={hideFunction}
        />
    );
};

export default MembershipDialog;
