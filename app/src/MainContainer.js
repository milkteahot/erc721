import {drizzleConnect } from "@drizzle/react-plugin";
import MainComponent from "./MainComponent";

const mapStateToProps = (state) => {
    return {
        accounts: state.accounts,
        accountBalances: state.accountBalances,
        DeedToken: state.contracts.DeedToken,
        drizzleStatus: state.drizzleStatus
    };
};

const MainContainer = drizzleConnect(MainComponent, mapStateToProps);

export default MainContainer;