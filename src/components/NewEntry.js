import React from 'react'
import {
  Button,
  Close,
  Panel,
  PanelFooter,
  PanelHeader,
  Space,
  Text
} from 'rebass'

const NewEntry = ({ onDismiss }) =>
  <div className='NewEntry' style={{ maxWidth: '720px' }}>
    <Panel theme='info' m={4}>
      <PanelHeader
        inverted
        theme='default'
      >
        <Text>Add a New Entry</Text>
        <Space auto />
        <Close onClick={onDismiss} />
      </PanelHeader>
      <Text>
        Got something you'd like to contribute?  Add it here!
      </Text>
      <PanelFooter theme='default'>
        <Button>Submit</Button>
      </PanelFooter>
    </Panel>
  </div>

export default NewEntry
