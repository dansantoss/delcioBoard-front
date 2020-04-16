import React from 'react';

export const Verif = props => {
    return (
        <>
            {props.store.dashReducer.dados.length <= 0 && (
            <div className="container card mt-3">
                <div className="m-3">Nenhum resultado encontrado</div>
            </div>
            )}
            {props.store.dashReducer.dados.length > 0 && (
            <div className="card mt-3">
                <div className="row m-3">
                    <div className="table-responsive mt-1">
                        {props.getRowsData()}
                    </div>
                </div>
            </div>
            )}
        </>
    );
};