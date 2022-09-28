import { useDispatch, useSelector } from 'react-redux'
import { useAlert } from 'react-alert'
import React, { useEffect, useState } from 'react'
import { addTimeline, deleteTimeline, getUser } from '../../actions/user';
import { MdKeyboardBackspace } from 'react-icons/md';
import { FaTrash } from "react-icons/fa";
import { Button, Typography } from '@mui/material';
import { Link } from 'react-router-dom';


const Timeline = () => {
    const dispatch = useDispatch();
    const alert = useAlert();
    const { message, error, loading } = useSelector(state => state.update);
    const { user } = useSelector(state => state.user);
    const [timeline, setTimeline] = useState({
        title: '',
        description: '',
        date: ''
    });

    const submitHandler = async (e) => {
        e.preventDefault();
        await dispatch(addTimeline(timeline));
        dispatch(getUser())
    };

    const deleteHandler = (id) => {
        dispatch(deleteTimeline(id));
    };

    useEffect(() => {
        if (message) {
            alert.success(message);
            dispatch({ type: "CLEAR_MESSAGES" });
        }
        if (error) {
            alert.error(error);
            dispatch({ type: "CLEAR_ERRORS" });
        }
    },[alert, error, message, dispatch]);

  return (
    <div className="adminPanel">
      <div className="adminPanelContainer">
        <Typography variant="h4">
          <p>A</p>
          <p>D</p>
          <p>M</p>
          <p>I</p>
          <p style={{ marginRight: "1vmax" }}>N</p>
          <p>P</p>
          <p>A</p>
          <p>N</p>
          <p>E</p>
          <p>L</p>
        </Typography>
        <form action="" onSubmit={submitHandler}>
          <input
            type="text"
            placeholder="Title"
            value={timeline.title}
            onChange={(e) =>
              setTimeline({ ...timeline, title: e.target.value })
            }
            className="adminPanelInputs"
          />
          <input
            type="text"
            placeholder="Description"
            value={timeline.description}
            onChange={(e) =>
              setTimeline({ ...timeline, description: e.target.value })
            }
            className="adminPanelInputs"
          />
          <input
            type="date"
            placeholder="Date"
            value={timeline.date}
            onChange={(e) => setTimeline({ ...timeline, date: e.target.value })}
            className="adminPanelInputs"
          />
          <Link to="/account">
            BACK <MdKeyboardBackspace />
          </Link>
          <Button type="submit" variant="contained" disabled={loading}>
            Add
          </Button>
        </form>
        <div className="adminPanelYoutubeVideos">
          {user &&
            user.timeline &&
            user.timeline.map((item) => (
              <div className="youtubeCard" key={item._id}>
                <Typography variant="h6">{item.title}</Typography>
                <Typography variant="body1" style={{ letterSpacing: "2px" }}>
                  {item.description}
                </Typography>
                <Typography variant="body1" style={{ fontWeight: 600 }}>
                  {item.date.toString().split("T")[0]}
                </Typography>

                <Button
                  style={{
                    margin: "auto",
                    display: "block",
                    color: "rgba(40,40,40,0.7)",
                  }}
                  onClick={() => deleteHandler(item._id)}
                >
                  <FaTrash />
                </Button>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default Timeline