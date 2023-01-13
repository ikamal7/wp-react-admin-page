import { __ } from '@wordpress/i18n';
import { TabPanel } from '@wordpress/components'
import General from './General';
import Blocks from './Blocks';
import Credentials from './Credentials';




const Page = ( ) => {

  return (
    <>
      <TabPanel
          className="ud-tab-panel"
                    activeClass="is-active"
                    initialTabName="general"
                    tabs={ [
                        {
                            name: 'general',
                            title: 'General',
                            className: 'tab-general',
                        },
                        {
                            name: 'blocks',
                            title: 'Blocks',
                            className: 'tab-content',
                        },
                        {
                            name: 'credentials',
                            title: 'Credentials',
                            className: 'tab-credentials',
                        },
                        // {
                        //     name: 'advanced',
                        //     title: 'Advanced',
                        //     className: 'tab-advanced',
                        // },
                    ] }>
                    {
                      ( tab ) => {
                          if ( 'general' === tab.name ) {
                              return <General />;
                          } else if ( 'blocks' === tab.name ) {
                              return <Blocks />;
                          } else if ( 'credentials' === tab.name ) {
                              return <Credentials />;
                          } else {
                              return 'ultraDevs';
                          }
                      }
                  }
              </TabPanel>
            </>
    )
}

export default Page;