import React from 'react';

export function setDocumentTitle(title) {
    document.title = `${title} | Trello`;
}

export function renderErrorFor(errors, element) {
    if (!errors) return false;
    return (
        <div className="form_error">
            {errors[element]}
        </div>
    );
}