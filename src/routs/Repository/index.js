import React from 'react';
import {Query} from 'react-apollo';
import {gql} from 'apollo-boost';

import Issue from '../../components/Issue';


function Repository({match}) {
    const searchQuery = gql`
      query {
      repository(owner:${match.params.repoOwner}, name:${match.params.repoName}) {
        issues(last:20, states:OPEN) {
          edges {
            node {
              title
              body
              comments {totalCount}
            }
          }
        }
      }
    }
    `;
    return (
        <div>
            <h1>Repository: {match.params.repoName}</h1>
            <Query query={searchQuery}>
                {({data, loading, error}) => {
                    if (loading) return <p>loading...</p>
                    if (error) return <p>{error.message}</p>
                    else {
                        return (
                            <ul>
                                {data.repository.issues.edges.map(issue => <Issue issue={issue.node} />)}
                            </ul>
                    )
                }
                }}
            </Query>
        </div>
    )
}

export default Repository;