import { useState } from '@wordpress/element';
import { Button, Icon } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { toast } from 'react-toastify';

const Credentials = () => {

	const [value, setValue] = useState(RBASPAdmin.saved_credentials || [])
	const [ credentials, setCredentials ] = useState(RBASPAdmin.credentials || []);
	const updateData = e => {
		setValue({
				...value,
				[e.target.name]: e.target.value
		})
	}

	const submit = (e) => {
		e.preventDefault();

		const data = new FormData();
			data.append( 'action', 'rbasp_save_credentials' );
			data.append( 'nonce', RBASPAdmin.nonce );
			data.append( 'credentials', JSON.stringify( value ) );
			fetch( RBASPAdmin.ajaxurl, {
				method: 'POST',
				body: data,
			} )
			.then( ( response ) => response.json() )
			.then( ( data ) => {
					if ( data.success ) {
							toast.success( data.data.message );
					} else {
							toast.error( data.data.message );
					}
			} )
			.catch( ( error ) => {
					toast.error( error );
			} );
	}

	return (
		<>
			<div className='row'>
				<div className='col-full'>
          <div class="wpb-dashboard-panel__header">
              <div class="wpb-dashboard-panel__header-content">
                  <h2>Credentials</h2>
                  <p class="f16">Here is the list of our all credentials. You can input credentials from here. <strong>After changing any input make sure to click the Save Changes button.</strong></p>
              </div>
          </div>
          <form onSubmit={ submit }>
           <div className='wpb-dashboard-credentials'>
					{credentials.map((item) => {
						return (
              <div className="wpb-dashboard-credentials__item" key={ item.id }>
                <div class="wpb-dashboard-credentials__item-title-wrap">
                    <span class="wob-dashboard-credentials__item-icon"></span>
                    <h3 class="wpb-dashboard-credentials__item-title">
                      <label>{ item.title }</label>
                    </h3>
                </div>
								<div className='wpb-dashboard-credentials__item-input-wrap'>
								{item.fields.map((field, index) => {
                  return (
                    <div className='wpb-dashboard-credentials__item-input'>
										<label htmlFor={field.name}>
                        { field.label }
                      </label>
                      <input
                        id={field.name}
                        className='wpb-credential'
												key={index}
												type={field.type}
												name={ `credentials[${ item.id }][${ field.name }]` }
                        onChange={ updateData }
                        value={value[`credentials[${ item.id }][${ field.name }]`]}
											/>
                      
                      </div>
									);
                }) }
                </div>
							</div>
						);
					})}
					<Button
						className='wpb-admin-button wpb-admin-button-save'
						onClick={submit}
					>
						{__('Save', 'rb-asp-blocks')}
              </Button>
              </div> 
						</form>
				</div>
			</div>
		</>
	);
};

export default Credentials;
