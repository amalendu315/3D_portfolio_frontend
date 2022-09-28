import axios from 'axios';

export const getUser = () => async (dispatch) => {
    try {
        dispatch({
            type: 'GET_USER_REQUEST',
        })

        const { data } = await axios.get('/api/user')

        dispatch({
            type: 'GET_USER_SUCCESS',
            payload: data.user,
        })

    } catch (error) {
        dispatch({
            type: 'GET_USER_FAILURE',
            payload: error.response && error.response.data.message
        })
    }
}

export const login = (email, password) => async (dispatch) => {
    try {
        dispatch({
            type: 'LOGIN_REQUEST',
        })

        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        const { data } = await axios.post('/api/login', { email, password }, config)

        dispatch({
            type: 'LOGIN_SUCCESS',
            payload: data.message,
        })

    } catch (error) {
        dispatch({
            type: 'LOGIN_FAILURE',
            payload: error.response && error.response.data.message
        })
    }
};

export const logout = () => async (dispatch) => {
    try {
        dispatch({
            type: 'LOGOUT_REQUEST',
        })

        const { data } = await axios.get('/api/logout')

        dispatch({
            type: 'LOGOUT_SUCCESS',
            payload: data.message,
        })

    } catch (error) {
        dispatch({
            type: 'LOGOUT_FAILURE',
            payload: error.response && error.response.data.message
        })
    }
}

export const loadUser = () => async (dispatch) => {
    try {
        dispatch({
            type: 'LOAD_USER_REQUEST',
        })

        const { data } = await axios.get('/api/me')

        dispatch({
            type: 'LOAD_USER_SUCCESS',
            payload: data.user,
        })

    } catch (error) {
        dispatch({
            type: 'LOAD_USER_FAILURE',
            payload: error.response && error.response.data.message
        })
    }
};

export const updateUser = (name,email,password,skills, about) => async (dispatch) => {
  try {
    dispatch({
      type: "UPDATE_USER_REQUEST",
    });

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.put(
      "/api/admin/update",
      {name, email, password, skills, about},
      config
    );

    dispatch({
      type: "UPDATE_USER_SUCCESS",
      payload: data.message,
    });
  } catch (error) {
    dispatch({
      type: "UPDATE_USER_FAILURE",
      payload: error.response && error.response.data.message,
    });
  }
};

export const addTimeline = (timeline) => async (dispatch) => {
  try {
    dispatch({
      type: "ADD_TIMELINE_REQUEST",
    });

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.post(
      "/api/admin/timeline/add",
      timeline,
      config
    );

    dispatch({
      type: "ADD_TIMELINE_SUCCESS",
      payload: data.message,
    });
  } catch (error) {
    dispatch({
      type: "ADD_TIMELINE_FAILURE",
      payload: error.response && error.response.data.message,
    });
  }
};

export const deleteTimeline = (id) => async (dispatch) => {
  try {
    dispatch({
      type: "DELETE_TIMELINE_REQUEST",
    });

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.delete(
      `/api/admin/timeline/${id}`,
      config
    );

    dispatch({
      type: "DELETE_TIMELINE_SUCCESS",
      payload: data.message,
    });
  } catch (error) {
    dispatch({
      type: "DELETE_TIMELINE_FAILURE",
      payload: error.response && error.response.data.message,
    });
  }
};

export const addYoutube = (title, url, image) => async (dispatch) => {
  try {
    dispatch({
      type: "ADD_YOUTUBE_REQUEST",
    });

    const { data } = await axios.post(
      "/api/admin/youtube/add",
      { title, url, image },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    dispatch({
      type: "ADD_YOUTUBE_SUCCESS",
      payload: data.message,
    });
  } catch (error) {
    dispatch({
      type: "ADD_YOUTUBE_FAILURE",
      payload: error.response.data.message,
    });
  }
};

export const deleteYoutube = (id) => async (dispatch) => {
  try {
    dispatch({
      type: "DELETE_YOUTUBE_REQUEST",
    });

    const { data } = await axios.delete(`/api/admin/youtube/${id}`);

    dispatch({
      type: "DELETE_YOUTUBE_SUCCESS",
      payload: data.message,
    });
  } catch (error) {
    dispatch({
      type: "DELETE_YOUTUBE_FAILURE",
      payload: error.response.data.message,
    });
  }
};

export const addProject =
  (title, url, image, description, techStack) => async (dispatch) => {
    try {
      dispatch({
        type: "ADD_PROJECT_REQUEST",
      });

      const { data } = await axios.post(
        "/api/admin/project/add",
        { title, url, image, description, techStack },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      dispatch({
        type: "ADD_PROJECT_SUCCESS",
        payload: data.message,
      });
    } catch (error) {
      dispatch({
        type: "ADD_PROJECT_FAILURE",
        payload: error.response.data.message,
      });
    }
  };

export const deleteProject = (id) => async (dispatch) => {
  try {
    dispatch({
      type: "DELETE_PROJECT_REQUEST",
    });

    const { data } = await axios.delete(`/api/admin/project/${id}`);

    dispatch({
      type: "DELETE_PROJECT_SUCCESS",
      payload: data.message,
    });
  } catch (error) {
    dispatch({
      type: "DELETE_PROJECT_FAILURE",
      payload: error.response.data.message,
    });
  }
};

export const contactUs = (name, email, message) => async (dispatch) => {
  try {
    dispatch({
      type: "CONTACT_US_REQUEST",
    });

    const { data } = await axios.post(
      "/api/contact",
      { name, email, message },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    dispatch({
      type: "CONTACT_US_SUCCESS",
      payload: data.message,
    });
  } catch (error) {
    dispatch({
      type: "CONTACT_US_FAILURE",
      payload: error.response.data.message,
    });
  }
};
