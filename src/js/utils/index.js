import React from 'react';

export function setDocumentTitle(title) {
    document.title = `${title} | Trello`;
}

export function renderErrorFor(errors, element) {
    if (!errors) return false;
    return (
        <p className="help is-danger">
            {errors[element]}
        </p>
    );
}