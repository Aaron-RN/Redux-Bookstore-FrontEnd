import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addBookToList } from '../actions/index';
import '../assets/css/BookForm.css';

class BooksForm extends React.Component {
  constructor(props) {
    super(props);
    const { genres } = this.props;

    this.state = {
      // id: Math.floor(Math.random() * 1000),
      title: '',
      author: '',
      genre: genres[0].name,
      comments: [],
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.selectForm = React.createRef();
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  handleSubmit(e) {
    const { addBookToList } = this.props;
    e.preventDefault();
    addBookToList(this.state);
    this.reset();
  }

  reset() {
    this.selectForm.current.scrollIntoView({ behavior: 'smooth' });
    const { genres } = this.props;
    this.setState({
      // id: Math.floor(Math.random() * 1000),
      title: '',
      author: '',
      genre: genres[0].name,
      comments: [],
    });
  }

  render() {
    const { title, author, genre } = this.state;
    const { status, genres } = this.props;
    const { errors, form } = status;
    const errorDiv = error => (
      <div key={error}>
        {error}
      </div>
    );
    const showErrors = form === 'bookForm' ? (
      <div className="errors">
        {errors.map(error => errorDiv(error))}
      </div>
    ) : null;

    return (
      <div className="bg-header round-bottom box-shadow">
        <div className="center max-width-90 border-top">
          <div className="formTitle">Add New Book</div>
          {showErrors}
          <form ref={this.selectForm} onSubmit={this.handleSubmit} className="bookForm">
            <div>
              <input
                placeholder="Book Title"
                name="title"
                type="text"
                value={title}
                onChange={this.handleChange}
              />
              <input
                placeholder="Book Author"
                name="author"
                type="text"
                value={author}
                onChange={this.handleChange}
              />
            </div>
            <select className="font-header" name="genre" placeholder="Genre" value={genre} onChange={this.handleChange}>
              {genres.map(genre => (
                <option key={genre.id + genre.name}>{genre.name}</option>
              ))}
            </select>
            <button type="submit">Add Book</button>
          </form>
        </div>
      </div>
    );
  }
}

BooksForm.propTypes = {
  status: PropTypes.instanceOf(Object).isRequired,
  genres: PropTypes.instanceOf(Array).isRequired,
  addBookToList: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  status: state.status,
  genres: state.genres,
});

const mapDispatchToProps = dispatch => ({
  addBookToList: book => {
    dispatch(addBookToList(book));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(BooksForm);
