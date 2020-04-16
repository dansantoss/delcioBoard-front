import React from 'react';

export const Verif = props => {
    return (
        <>
            {props.store.dashReducer.dados.length <= 0 && (
                <div>Nenhum resultado encontrado</div>
            )}
            {props.store.dashReducer.dados.length > 0 && (<div>{props.getRowsData()}</div>
            )}
        </>
    );
};