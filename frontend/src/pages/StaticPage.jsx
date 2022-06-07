import React, { Fragment } from 'react';

/**
 * @param string title
 * @param string content
 * @returns {JSX.Element}
 * @constructor
 */
export default function StaticPage({ page: { title, content } = {} }) {
    return (
        <Fragment>
            <div className="container">
                {
                    title && content ? (
                        <Fragment>
                            <h1>{title.rendered}</h1>
                            <main dangerouslySetInnerHTML={{__html: content.rendered}}></main>
                        </Fragment>
                    ) : (
                        <div className="loading">Loading...</div>
                    )
                }
            </div>
        </Fragment>
    );
}