import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import PropTypes from 'prop-types';
import TabScrollButton from '@material-ui/core/TabScrollButton';
import Timer from './Timer';

let scrolling = false;
const StyledTabs = withStyles({
  indicator: {
    display: 'flex',
    justifyContent: 'center',
    // display: 'inline-block',
    // textAlign: 'center',
    backgroundColor: 'transparent',
    '& > span': {
      maxWidth: 40,
      width: '100%',
      backgroundColor: '#00ff00',
    },
  },
})((props) => <Tabs {...props} TabIndicatorProps={{ children: <span /> }} />);

const StyledTab = withStyles((theme) => ({
  root: {
    textTransform: 'none',
    color: '#fff',
    // display: 'inline-block',
    // textAlign: 'center',
    fontWeight: theme.typography.fontWeightRegular,
    fontSize: theme.typography.pxToRem(15),
    marginRight: theme.spacing(1),
    '&:focus': {
      opacity: 1,
    },
  },
}))((props) => <Tab disableRipple {...props} />);


TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    // value: PropTypes.any.isRequired,
  };
function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }
function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box p={3}>
            <Typography>{children}
            </Typography>
          </Box>
        )}
      </div>
    );
  }
class SimpleTabs extends React.Component {

    constructor(){
        super();
        this.state = {
            value: 0
        }
    }

    componentWillMount(){
//         this.setState({value:1},()=>{
//             console.log('mount')
// ;        });
    }

    handleScroll = (event) =>{
        // event.preventDefault();
        if(!scrolling){
            scrolling = true;
            setTimeout(()=>{
                if(event.deltaY<0 && this.state.value!==0){
                    this.setState({value:(this.state.value-1)},()=>{
                        scrolling = false;
                    });
                }else if(this.state.value!==2 && event.deltaY>=0){
                    this.setState({value:(this.state.value+1)},()=>{
                        scrolling = false;
                    });
                }else {
                    console.log(event.deltaY)
                    scrolling = false;
                }
            },250)
        }
        // if (this.state.value !== 2) 
        // {

        // }
    }
    handleChange = (event, value) =>{
        // this.state.value = value;
        this.setState({value:value})
    }
    render () {
        return (
            <div style={{flexGrow: 1}}>
             {/* <div className={classes.demo1}>
            //   <AntTabs value={value} onChange={handleChange} aria-label="ant example">
            //     <AntTab label="Tab 1" />
            //     <AntTab label="Tab 2" />
            //     <AntTab label="Tab 3" />
            //   </AntTabs>
            //   <Typography className={classes.padding} />
            //</div> */
            }
            <div id='scar' onWheel={this.handleScroll} style = {{color: 'white',}}>
              <StyledTabs value={this.state.value} onChange={this.handleChange} aria-label="styled tabs example" centered>
                <StyledTab Style={{fontweight:'bold'}} label="Focitime"/>
                <StyledTab label="Settings"  />
                <StyledTab label="Report"/>
              </StyledTabs>
              <Typography style= {{backgroundColor: '	#008B8B', color: 'white'}}/>
              <TabPanel value={this.state.value} index={0}>
               <Timer> </Timer>
               </TabPanel>
              <TabPanel value={this.state.value} index={1}>
              Item Two
               </TabPanel>
              <TabPanel value={this.state.value} index={2}>
              Item Three
              </TabPanel>
            </div>
          </div>
        )
    }

}

export default SimpleTabs;
