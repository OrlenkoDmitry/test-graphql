import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom'


function SearchResults({data}) {
    if (!data.search.nodes.length) {
        return <p>No results found</p>
    } else {
        return (
            <ul className="search-results">
                {
                    data.search.nodes.map(({name, id, stargazers, owner}) => (
                        <li key={id}>
                            <Link to={`${owner.login}/${name}`}>{"⭐"} {stargazers.totalCount} - {name}</Link>
                        </li>
                    ))
                }
            </ul>
        )
    }
}

SearchResults.propTypes = {
    data: PropTypes.object,
};

export default SearchResults;