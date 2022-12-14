import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, Link } from 'react-router-dom';
import { Pool } from '@mui/icons-material';
import axios from 'axios';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';

function UserPage() {
  const dispatch = useDispatch();
  const history = useHistory();
  const user = useSelector((store) => store.user);
  // const pool = useSelector((store) => store.pool);
  const pool = [
    {name: 'Swimming Pool', volume: '30000'},
    {name: 'Spa', volume: '10000'}
  ]

  useEffect(() => {
    dispatch({ type: 'FETCH_POOLS' });
  }, []);
  
  
  return (
    <div className="container">
      <h2>Welcome, {user.first_name}!</h2>

            <h2>Your Pools</h2>
            {/* <pre>{JSON.stringify(user)}</pre> */}
            {
                // user.map(user => {
                //     return <div key={user.id}>{user.first_name}</div>
                // })
            }
                  <section className="pools">
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
              {pool.map(pool => {
                  return (
                    <>
                      <ListItem alignItems="flex-start" onClick={(event) => displayPool(pool)} 
                      sx={{'&:hover':{backgroundColor:'LightBlue', cursor:'pointer'}}}>
                      <ListItemAvatar>
                        <Avatar alt="Pool"/>
                      </ListItemAvatar>
                      <ListItemText
                        primary={pool.name}
                        secondary={
                          <React.Fragment>
                            {pool.volume}
                          </React.Fragment>
                        }
                      />
                    </ListItem>
                    <Divider variant="inset" component="li" />
                    </>
                  );
              })}
          </List>   
        </section>

    </div>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;
