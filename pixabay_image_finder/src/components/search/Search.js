import React, { Component } from 'react'
import TextField from 'material-ui/TextField'
import { SelectField } from 'material-ui'
import { ActionPictureInPicture } from 'material-ui/svg-icons'
import MenuItem from 'material-ui/MenuItem'

export default class Search extends Component {

    state={
        SearchText: '',
        amount:15,
        apiUrl: 'https://pixabay.com/api',
        apiKey:'44867923-0dfc83b31bfc371dd7af6d462',
        images: []
    }
  render() {
    return (
      <div>
        <TextField 

            name='searcText'
            value={this.state.SearchText}
            onChange={this.onTextChange}
            floatingLabelText = "Search For Images"
            fullWidth={true}
        />
        <br />
        <SelectField
          name="amount"
          floatingLabelText="Amount"
          value={this.state.amount}
          onChange={this.onAmountChange}
        >
          <MenuItem value={5} primaryText="5" />
          <MenuItem value={10} primaryText="10" />
          <MenuItem value={15} primaryText="15" />
          <MenuItem value={30} primaryText="30" />
          <MenuItem value={50} primaryText="50" />
        </SelectField>
        <br />


      </div>
    )
  }
}
