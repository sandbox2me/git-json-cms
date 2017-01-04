import React from "react"
import { Glyphicon, ProgressBar } from "react-bootstrap"
import Dropzone from "react-dropzone"

import { assetUrl } from "../apis/assetServer"

const style = {
  borderWidth: "2px",
  borderColor: "#555",
  borderStyle: "dashed",
  borderRadius: "0.3rem",
  padding: "1rem",
  textAlign: "center"
}

const activeStyle = {
  color: "#3c763d",
  backgroundColor: "#dff0d8",
  borderStyle: "solid"
}

const rejectStyle = {
  color: "#a94442",
  backgroundColor: "#f2dede",
  borderStyle: "solid"
}

export default function ImageEditor({ field, onDrop }) {
  return (
    <div>
      { renderImage(field) }
      <hr />
      { renderUpload(field, onDrop) }
    </div>
  )
}

function renderImage(field) {
  if (field.value) {
    return (
      <img
        key={ field.value.src }
        src={ assetUrl(field.value.src) }
        style={ { width: "100%" } } />
    )
  } else {
    return (
      <Glyphicon
        glyph="picture"
        style={ { width: "100%", textAlign: "center" } } />
    )
  }
}

function renderUpload(field, onDrop) {
  if (field.progress !== undefined) {
    return <ProgressBar min={ 0 } max={ 1 } now={ field.progress } />
  } else {
    return (
      <Dropzone
        accept="image/*"
        multiple={ false }
        style={ style }
        activeStyle={ activeStyle }
        rejectStyle={ rejectStyle }
        onDrop={ onDrop }>
        <div>Drop image here, or click to open file dialog.</div>
      </Dropzone>
    )
  }
}
