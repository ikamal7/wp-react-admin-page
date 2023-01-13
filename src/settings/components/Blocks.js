import { toast } from 'react-toastify';
import { useState } from '@wordpress/element';
import { compose } from '@wordpress/compose';
import Switch from 'rc-switch';

import { Button, Icon, ExternalLink } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import Eye from './icons/Eye';

const Blocks = ( props ) => {

    const [ blocks, setBlocks ] = useState( RBASPAdmin.blocks || [] );

    return (
        <>
            <div className="row">
                <div className="col-full">
                    <header class="wpb-admin-header">
                        <h2>Blocks Controller</h2>
                        <p>Disable the blocks you are not using to minimize resource loading</p>
                    </header>
                    <div class="wpb-admin-global-control">
                        <Button
                        className="wpb-admin-button wpb-admin-button-enable"
                        onClick={ ( ) => {
                            const newBlocks = [ ...blocks ];
                            newBlocks.map( ( block ) => {
                                block.isActive = true;
                            } );
                            setBlocks( newBlocks );
                        } }
                        >
                        { __( 'Enable All', 'rb-asp-blocks' ) }
                        </Button>
                        
                        <Button
                            className="wpb-admin-button wpb-admin-button-disable"
                            onClick={ ( ) => {
                                const newBlocks = [ ...blocks ];
                                newBlocks.map( ( block ) => {
                                    block.isActive = false;
                                } );
                                setBlocks( newBlocks );
                            } }
                        >
                            { __( 'Disable All', 'rb-asp-blocks' ) }
                        </Button>
                        <Button
                            className="wpb-admin-button wpb-admin-button-save"
                            onClick={ ( ) => {
                            const data = new FormData();
                                data.append( 'action', 'rbasp_save_blocks' );
                                data.append( 'nonce', RBASPAdmin.nonce );
                                data.append( 'blocks', JSON.stringify( blocks ) );
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
                            } }
                        >
                            { __( 'Save', 'rb-asp-blocks' ) }
                        </Button>
                    </div>
                    <div className="wpb-admin-checkboxes-wrapper">
                        { blocks.map((block, index) => {
                        
                            return (
                                <div className="wpb-admin-checkbox" key={ index }>
                                    <label htmlFor={ block.id }
                                        className="wpb-admin-checkbox-label">
                                        {__(block.label, 'rb-asp-blocks')}
                                        <Switch
                                            id={block.id}
                                            checked={ block.isActive }
                                            onChange={ ( value ) => {
                                                const newBlocks = [ ...blocks ];
                                                newBlocks[ index ].isActive = value;
                                                setBlocks( newBlocks );
                                            } }
                                            checkedChildren={block.isActive? 'ON' : 'OFF' }
                                            unCheckedChildren={!block.isActive? 'OFF' : '' }
                                        />
                                        <a target="__blank" title="Demo" href="https://wordpress.org">
                                            <Eye/>
                                        </a>
                                    </label>
                                    
                                </div>
                            )
                        } ) }
                    </div>
                    <div className="save-options">
                    <Button
                            className="wpb-admin-button wpb-admin-button-save"
                            onClick={ ( ) => {
                            const data = new FormData();
                                data.append( 'action', 'rbasp_save_blocks' );
                                data.append( 'nonce', RBASPAdmin.nonce );
                                data.append( 'blocks', JSON.stringify( blocks ) );
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
                            } }
                        >
                            { __( 'Save', 'rb-asp-blocks' ) }
                        </Button>
                    </div>
                </div>
            </div> 
        </>
    )
}

export default Blocks;