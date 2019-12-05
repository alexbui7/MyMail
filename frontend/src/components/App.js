import React, {Component, Fragment} from 'react';
import ReactDOM from 'react-dom';
import DataProvider from "./DataProvider";
import Table from "./Table";
import Header from "./layout/header"

const App = () =>(
    <Fragment>
        <div>
            <DataProvider endpoint={"api/mymail/"} render={data => <Table data={data}/>} />
        </div>

        <div>
            <Header/>
        </div>
    </Fragment>

);

ReactDOM.render(<App />, document.getElementById("app"));
