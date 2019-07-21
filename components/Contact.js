var Contact = React.createClass({
  propTypes: {
      item: React.PropTypes.object.isRequired,
  },

  render: function () {
      return (<div className='contactItem'>
          <img className='contactImage' src='http://contactsjournal.com/images/crm-app-icon.png' />
          <p className='contactLabel'>
              Name: {this.props.item.firstName}
          </p>
          <p className='contactLabel'>
              Surname: {this.props.item.lastName}
          </p>
          <a href={'mailto:' + this.props.item.email}>
              {this.props.item.email}
          </a>
      </div>)
  }
})

