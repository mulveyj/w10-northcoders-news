import React from 'react';
import {connect} from 'react-redux';
import ArticleCard from './ArticleCard';
import * as actions from '../actions/actions';


class ArticleList extends React.Component {

  componentDidMount () {
    this.props.fetchArticles();
  }

  render () {
    return (
      <div id='ArticleList'>
        {this.props.articles.map(article => <ArticleCard title={article.title} 
                                                          votes={article.votes} 
                                                          key={article.title}
                                                          article_id={article._id}/>)}
      </div>
    );
  }
}

function mapDispatchToProps (dispatch) {
  return {
    fetchArticles: () => {
      dispatch(actions.fetchArticles());
    }
  };
}

function MapStateToProps (state) {
  return {
    articles: state.articles,
    loading :state.loading

  }
}
export default connect(MapStateToProps, mapDispatchToProps) (ArticleList);