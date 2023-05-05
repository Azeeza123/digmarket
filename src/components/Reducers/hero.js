import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    teamMembers: []
}
const HeroSlice = createSlice({ name: 'hero', initialState, reducers: { getTeam_data: (state, action) => { return { ...state, teamMembers: action.payload } } } })
export { HeroSlice }