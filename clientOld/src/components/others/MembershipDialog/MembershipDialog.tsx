import americanExpress from 'assets/images/americanExpress.png';
import kingPoint from 'assets/images/kingPoint.png';
import mastercard from 'assets/images/mastercard.png';
import paypal from 'assets/images/paypal.png';
import peonPoint from 'assets/images/peonPoint.png';
import visa from 'assets/images/visa.png';
import Button from 'components/UI/Button/Button';
import Dialog from 'components/UI/Modal/Dialog';
import Select from 'components/UI/Select/Select';
import React, { FormEvent, MouseEvent, useEffect, useState } from 'react';
import { SectionStyles } from 'ts/interfaces';
import {
    MembershipDialogSectionTypes,
    MembershipTypes,
    PaymentDetailsTypes,
    paymentMethodTypes,
    PaymentMethodTypes,
    SubscriptionTypes
} from 'ts/types';
import styles from './membershipDialog.module.scss';

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
        repeatPayment: 'no'
    });
    const [paymentMethod, setPaymentMethod] = useState<PaymentMethodTypes>();
    const [paymentDetails, setPaymentDetails] = useState<PaymentDetailsTypes>({
        name: 'Nadia Hayden',
        cardDetails: '1758897574895478',
        cardSecretNums: '748',
        dateOfExpiration: '252025'
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
        subscription: { display: 'none' }
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
                [showedSectionHelper]: { opacity: 1 }
            };
            const previousOpenedSections = Object.keys(newStyles).filter(
                section =>
                    sectionStyles[section as keyof SectionStyles].opacity === 1 && section !== showedSectionHelper
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

    const content = (
        <div className={styles.dialog}>
            <header className={styles.header}>
                <h4>Get a membership to finally reach your dreams and learn the desired language!</h4>
            </header>
            <hr className={styles.separator} />
            {existingSections.includes('membership') && (
                <section>
                    <h4
                        onClick={() => {
                            setShowedSectionHelper(showedSection === 'membership' ? 'subscription' : 'membership');
                        }}
                    >
                        Pick your membership
                        {membership ? <span className={styles.pickedChoice}>{membership}</span> : null}
                    </h4>
                    <div
                        className={`${styles.cardsWrapper} ${firstRender ? styles.firstSectionAnimation : ''}`}
                        style={sectionStyles.membership}
                    >
                        <div
                            onClick={e => onChangeHandler(e, 'membership', 'peon')}
                            className={`${styles.cardWrapper} ${membership === 'peon' ? `${styles.cardChosen}` : ''}`}
                        >
                            <h2>Peon</h2>
                            <hr />
                            <div className={styles.privilegesContainer}>
                                {peonText.map((text, index: number) => (
                                    <div className={styles.privilegesWrapper} key={index}>
                                        <img src={peonPoint} alt="peonPoint" />
                                        <p>{text}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div
                            onClick={e => onChangeHandler(e, 'membership', 'king')}
                            className={`${styles.cardWrapper} ${membership === 'king' ? `${styles.cardChosen}` : ''}`}
                        >
                            <h2>King</h2>
                            <hr />
                            <div className={styles.privilegesContainer}>
                                {kingText.map((text, index: number) => (
                                    <div className={styles.privilegesWrapper} key={index}>
                                        <img src={kingPoint} alt="peonPoint" />
                                        <p>{text}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
            )}
            {existingSections.includes('subscription') && (
                <section>
                    <hr className={styles.separator} />
                    <h4
                        onClick={() => {
                            setShowedSectionHelper(showedSection === 'subscription' ? 'paymendMethod' : 'subscription');
                        }}
                    >
                        Subscription options
                        {subscription.period ? (
                            <span className={styles.pickedChoice}>{subscription.period} </span>
                        ) : null}
                        {subscription.period ? (
                            <span className={styles.pickedChoice} style={{ border: 'none' }}>
                                /
                            </span>
                        ) : null}
                        {subscription.repeatPayment ? (
                            <span className={styles.pickedChoice}>{subscription.repeatPayment}</span>
                        ) : null}
                    </h4>
                    <div className={`${styles.section}`} style={sectionStyles.subscription}>
                        <Select
                            text="PERIOD"
                            type="singleselect"
                            useCase="form"
                            data={[
                                { name: 'Monthly', value: 'monthly' },
                                { name: 'Yearly', value: 'early' }
                            ]}
                            onChange={d => setSubscription({ ...subscription, period: d })}
                            value={[subscription.period || '']}
                        />
                        <Select
                            text="REPEAT_PAYMENT"
                            type="singleselect"
                            useCase="form"
                            styleInput={{ fontSize: '12px' }}
                            data={[
                                { name: 'Yes', value: 'yes' },
                                { name: 'No', value: 'no' }
                            ]}
                            onChange={d => setSubscription({ ...subscription, repeatPayment: d || 'no' })}
                            value={[subscription.repeatPayment]}
                        />
                        <Button
                            text="Ok"
                            useCase="small"
                            disabled={() => (subscription.period && subscription.repeatPayment ? false : true)}
                            onClick={() => {
                                setShowedSectionHelper('paymendMethod');
                            }}
                        />
                    </div>
                </section>
            )}
            {existingSections.includes('paymendMethod') && (
                <section>
                    <hr className={styles.separator} />
                    <h4
                        onClick={() => {
                            setShowedSectionHelper(
                                showedSection === 'paymendMethod' ? 'paymentDetails' : 'paymendMethod'
                            );
                        }}
                    >
                        Payment method
                        {paymentMethod ? <span className={styles.pickedChoice}>{paymentMethod}</span> : null}
                    </h4>
                    <div
                        className={`${styles.paymentMethodsWrapper} ${styles.section}}`}
                        style={sectionStyles.paymendMethod}
                    >
                        <div
                            onClick={e => onChangeHandler(e, 'paymendMethod', 'visa')}
                            className={paymentMethod === 'visa' ? styles.chosenMethod : ''}
                        >
                            <img src={visa} alt="visa" />
                        </div>
                        <div
                            onClick={e => onChangeHandler(e, 'paymendMethod', 'mastercard')}
                            className={paymentMethod === 'mastercard' ? styles.chosenMethod : ''}
                        >
                            <img src={mastercard} alt="mastercard" />
                        </div>
                        <div
                            onClick={e => onChangeHandler(e, 'paymendMethod', 'americanExpress')}
                            className={paymentMethod === 'americanExpress' ? styles.chosenMethod : ''}
                        >
                            <img src={americanExpress} alt="americanExpress" />
                        </div>
                        <div
                            onClick={e => onChangeHandler(e, 'paymendMethod', 'paypal')}
                            className={paymentMethod === 'paypal' ? styles.chosenMethod : ''}
                        >
                            <img src={paypal} alt="paypal" />
                        </div>
                    </div>
                </section>
            )}
            {existingSections.includes('paymentDetails') && (
                <section>
                    <hr className={styles.separator} />
                    <h4
                        onClick={() => {
                            setShowedSectionHelper('paymentDetails');
                        }}
                    >
                        Payment details
                    </h4>
                    <div
                        className={`${styles.section} ${styles.paymentCardWrapper}`}
                        style={sectionStyles.paymentDetails}
                    >
                        <div className={styles.paymentCardDetails}>
                            <input
                                type="text"
                                name="name"
                                placeholder="Name"
                                value={paymentDetails.name}
                                onChange={e => setPaymentDetails({ ...paymentDetails, name: e.target.value })}
                                style={{
                                    borderRadius: '5px 5px 0 0',
                                    borderBottom: '2px solid #85cdca'
                                }}
                            />
                            <div className={styles.flexAlign}>
                                <input
                                    type="number"
                                    placeholder="Exp. date"
                                    name="dateOfExpiration"
                                    value={paymentDetails.dateOfExpiration}
                                    onChange={e =>
                                        setPaymentDetails({
                                            ...paymentDetails,
                                            dateOfExpiration: e.target.value
                                        })
                                    }
                                    style={{ borderRadius: '0 0 0 5px', width: '20%' }}
                                />
                                <div
                                    className={`${styles.paymentCardSeparator} ${styles.flexAlign}`}
                                    style={{ width: '80%' }}
                                >
                                    <img
                                        src="https://seeklogo.com/images/V/Visa-logo-C690BE33FD-seeklogo.com.png"
                                        alt="visaImg"
                                    />
                                    <input
                                        type="number"
                                        name="cardDetails"
                                        placeholder="Card number"
                                        value={paymentDetails.cardDetails}
                                        onChange={e => {
                                            const newValue = e.target.value;
                                            if (newValue.length)
                                                setPaymentDetails({
                                                    ...paymentDetails,
                                                    cardDetails: e.target.value
                                                });
                                        }}
                                    />
                                </div>
                                <input
                                    type="number"
                                    name="cardSecretNums"
                                    placeholder="CVC"
                                    value={paymentDetails.cardSecretNums}
                                    onChange={e =>
                                        setPaymentDetails({
                                            ...paymentDetails,
                                            cardSecretNums: e.target.value
                                        })
                                    }
                                    style={{ borderRadius: '0 0 5px 0', width: '20%' }}
                                />
                            </div>
                        </div>
                    </div>
                </section>
            )}
            <hr className={styles.separator} />
            <Button
                disabled={isDisabledSubmitBtn}
                useCase="big"
                text="Finish payment"
                onClick={e => onChangeHandler(e, 'paymentDetails', '')}
            />
        </div>
    );

    return <Dialog title="" content={content} hideFunction={hideFunction} />;
};

export default MembershipDialog;
