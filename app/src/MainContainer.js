import {drizzleConnect } from "@drizzle/react-plugin";
import MainComponent from "./MainComponent";
import { sayHelloAction } from "./actions/customAction";

const mapStateToProps = (state) => {
    return {
        accounts: state.accounts,
        accountBalances: state.accountBalances,
        DeedToken: state.contracts.DeedToken,
        drizzleStatus: state.drizzleStatus
    };
};

const mapDispatchToProps = (dispatch) => (
    {
        onClickSayHello: (params) => {dispatch(sayHelloAction(params))}
    }
)

const MainContainer = drizzleConnect(MainComponent, mapStateToProps, mapDispatchToProps);

export default MainContainer;