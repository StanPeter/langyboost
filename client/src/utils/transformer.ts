/**
 * Class made of transforming (enums) methods
 */
export default class Transformer {
    /**
     *
     * @param statusSymbol status enum from EA
     * @param blockingReason message returned in case of status symbol B
     * @returns translated status card message according to EA
     */
    static transformStatusCard = () => {
        // if (!statusSymbol) return '';
        // switch (statusSymbol) {
        //     case 'A':
        //         return 'Active';
        //     case 'B':
        //         return blockingReason;
        //     case 'E':
        //         return 'Expired';
        //     case 'S':
        //         return 'Suspended by user';
        //     case 'U':
        //         return 'Suspended by bank';
        //     case 'X':
        //         return 'Not activated';
        //     default:
        //         console.log('Unsupported usecase');
        //         return '';
        // }
    };
}
