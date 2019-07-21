var ContactForm = React.createClass({
    propTypes: {
      contact: React.PropTypes.object.isRequired
    },
  
    render: function() {
      return (
        /*React.createElement('form', {className: 'contactForm'},
          React.createElement('input', {
            type: 'text',
            placeholder: 'Name',
            value: this.props.contact.firstName,
          }),
          React.createElement('input', {
            type: 'text',
            placeholder: 'Surname',
            value: this.props.contact.lastName,
          }),
          React.createElement('input', {
            type: 'email',
            placeholder: 'Email',
            value: this.props.contact.email,
          }),
          React.createElement('button', {type: 'submit'}, "Dodaj kontakt")
        ) */
        <form className='contactForm'>
          
          <input 
              type='text' 
              placeholder='Name' 
              id='inputYourName'
              required 
              value={this.props.contact.firstName}
          />
          <input 
              type='text' 
              placeholder='Surname' 
              id='inputYourSurname' 
              required
              value={this.props.contact.lastName}
          />
          <input 
              type='email' 
              placeholder='Email' 
              id='inputYourEmail' 
              required
              value={this.props.contact.email}
          />
          <button type='submit'>Add contact</button>
          </form>  
      )
    },
  })