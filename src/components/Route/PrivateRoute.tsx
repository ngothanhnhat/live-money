import React, {FunctionComponent} from "react";
import {
    Route,
    Redirect,
} from "react-router-dom";
import {isAuthorised} from "../../utils/auth";

export const PrivateRoute: FunctionComponent = ({ children, ...rest }) => {
    return (
        <Route
            {...rest}
            render={({ location }) =>
                isAuthorised() ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/login",
                            state: { from: location }
                        }}
                    />
                )
            }
        />
    );
}