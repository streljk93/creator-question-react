import React from 'react';
import { Dropdown, Icon, Menu } from 'semantic-ui-react'

class Header extends React.Component {
	render() {
		return (
	    <Menu attached='top' compact style={{
	    	borderLeftWidth: '0',
	    	borderRightWidth: '0',
	    	borderTopWidth: '0',
	    }}>
	    	<div className="container">
		      <Dropdown item icon='bars' simple>
		        <Dropdown.Menu>
		          <Dropdown.Item>All question</Dropdown.Item>
		          <Dropdown.Item>Create question</Dropdown.Item>
		          <Dropdown.Item>
		            <Icon name='dropdown' />
		            <span className='text'>Template question</span>
		            <Dropdown.Menu>
		              <Dropdown.Item>Template 1</Dropdown.Item>
		              <Dropdown.Item>Template 2</Dropdown.Item>
		            </Dropdown.Menu>
		          </Dropdown.Item>
		          <Dropdown.Divider />
		          <Dropdown.Item>Share</Dropdown.Item>
		        </Dropdown.Menu>
		      </Dropdown>

		      <Menu.Menu position='right'>
		        <div className='ui right aligned category search item'>
		          <div className='ui transparent icon input'>
		            <input className='prompt' type='text' placeholder='Search questions...' />
		            <i className='search link icon' />
		          </div>
		          <div className='results' />
		        </div>
		      </Menu.Menu>
		    </div>
	    </Menu>
		);
	}
}

export default Header;