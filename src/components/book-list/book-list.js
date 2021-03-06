import React, { Component } from 'react';
import { connect } from 'react-redux';
import BookListItem from '../book-list-item';

import { withBookstoreService } from '../hoc';
import './book-list.css';

class BookList extends Component {
	componentDidMount() {
		const { bookstoreService } = this.props;
		const data = bookstoreService.getBooks();
		console.log(data);
	}

	render() {
		const { books } = this.props;
		return (
			<ul>
				{
					books.map(book => (
						<li key={book.id}><BookListItem book={book} /></li>
					))
				}
			</ul>
		);
	}
}

const mapStateToProps = ({ books }) => ({ books });

export default withBookstoreService()(connect(mapStateToProps)(BookList));
