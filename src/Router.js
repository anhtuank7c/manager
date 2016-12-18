import React from 'react';
import { Actions, Scene, Router } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';
import EmployeeCreate from './components/EmployeeCreate';
import Profile from './components/Profile';

const RouterComponent = () => {
    return (
        <Router sceneStyle={{ paddingTop: 65 }}>
            <Scene key="auth">
                <Scene key="login" component={LoginForm} title="Please login" />
            </Scene>
            <Scene key="main">
                <Scene
                    key="employeeList"
                    component={EmployeeList}
                    title="List Employee"
                    initial
                    leftTitle="Logout"
                    onLeft={() => Actions.auth()}
                    rightTitle="Add"
                    onRight={() => Actions.employeeCreate()} />
                <Scene key="employeeCreate" component={EmployeeCreate} title="Create Employee" />
                <Scene key="profile" component={Profile} title="Profile" />
            </Scene>
        </Router>
    );
};

export default RouterComponent;
