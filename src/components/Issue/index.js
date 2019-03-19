import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

function Issue({issue}) {
    return (
        <li key={issue.id} className="issue">
            <p>Issue: {issue.title}</p>
            <p>Comments quantity: {issue.comments.totalCount}</p>
            <p>Description: <br/> {issue.body}</p>
        </li>
    )
}

Issue.propTypes = {
  issue: PropTypes.object,
};

export default Issue;