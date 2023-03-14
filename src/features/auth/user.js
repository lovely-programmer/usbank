import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authService from "./authService";

const initialState = {
  userInfo: [],
  allUser: [],
  restricted: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

// @Get login User details
export const getMe = createAsyncThunk("userInfo/user", async (_, thunkAPI) => {
  try {
    const token = thunkAPI.getState().auth.user.token;
    return await authService.getMe(token);
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    return thunkAPI.rejectWithValue(message);
  }
});

// @Get all User
export const getAllUsers = createAsyncThunk(
  "userInfo/alluser",
  async (_, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.adminUser.token;
      return await authService.getAllUsers(token);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// @Restricted User
export const restrictedUsers = createAsyncThunk(
  "userInfo/restrictedUser",
  async (_, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.adminUser.token;
      return await authService.restrictedUsers(token);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// @Restrict a user
export const restrict = createAsyncThunk(
  "userInfo/restrictUser",
  async (userData, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.adminUser.token;
      return await authService.restrict(userData, token);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// Update Tcc
export const updateTcc = createAsyncThunk(
  "auth/updateTcc",
  async (id, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.adminUser.token;
      return await authService.updateTcc(id, token);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const updateImf = createAsyncThunk(
  "auth/updateImf",
  async (id, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.adminUser.token;
      return await authService.updateImf(id, token);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const updateTax = createAsyncThunk(
  "auth/updateTax",
  async (id, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.adminUser.token;
      return await authService.updateTax(id, token);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// @get User Code
export const getCode = createAsyncThunk(
  "userInfo/getCode",
  async (userData, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.adminUser.token;
      return await authService.getCode(userData, token);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// @Update user
export const editUser = createAsyncThunk(
  "auth/editUser",
  async (userData, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.adminUser.token;
      return await authService.editUser(userData, token);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// @Delete user
export const deleteOffice = createAsyncThunk(
  "auth/deleteUser",
  async (userData, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.adminUser.token;
      return await authService.deleteUser(userData, token);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const userSlice = createSlice({
  name: "userInfo",
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false;
      state.isError = false;
      state.isSuccess = false;
      state.message = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getMe.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getMe.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.userInfo = action.payload;
      })
      .addCase(getMe.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.userInfo = null;
      })
      .addCase(getAllUsers.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllUsers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.allUser = action.payload;
      })
      .addCase(getAllUsers.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.allUser = null;
      })
      .addCase(restrictedUsers.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(restrictedUsers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.restricted = action.payload;
      })
      .addCase(restrictedUsers.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.restricted = null;
      })
      .addCase(restrict.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(restrict.fulfilled, (state) => {
        state.isLoading = false;
        state.isSuccess = true;
      })
      .addCase(restrict.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(getCode.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getCode.fulfilled, (state) => {
        state.isLoading = false;
        state.isSuccess = true;
      })
      .addCase(getCode.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(updateTcc.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateTcc.fulfilled, (state) => {
        state.isLoading = false;
        state.isSuccess = true;
      })
      .addCase(updateTcc.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(updateImf.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateImf.fulfilled, (state) => {
        state.isLoading = false;
        state.isSuccess = true;
      })
      .addCase(updateImf.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(updateTax.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateTax.fulfilled, (state) => {
        state.isLoading = false;
        state.isSuccess = true;
      })
      .addCase(updateTax.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(editUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(editUser.fulfilled, (state) => {
        state.isLoading = false;
        state.isSuccess = true;
      })
      .addCase(editUser.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(deleteOffice.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteOffice.fulfilled, (state) => {
        state.isLoading = false;
        state.isSuccess = true;
      })
      .addCase(deleteOffice.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const { reset } = userSlice.actions;
export default userSlice.reducer;
