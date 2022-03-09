import React, { useCallback } from "react";
import { FormField } from "@sanity/base/components";
import AceEditor from "react-ace";
import PatchEvent, {set, unset} from '@sanity/form-builder/PatchEvent'

//테마를 지정해준다.
import "ace-builds/src-noconflict/theme-github";
import "ace-builds/src-noconflict/mode-javascript";

const CodeInput = React.forwardRef((props, ref) => {
    const { 
      type,         // Schema information
      value,        // Current field value
      readOnly,     // Boolean if field is not editable
      placeholder,  // Placeholder text from the schema
      markers,      // Markers including validation rules
      presence,     // Presence information for collaborative avatars
      compareValue, // Value to check for "edited" functionality
      onFocus,      // Method to handle focus state
      onBlur,       // Method to handle blur state  
      onChange,
    } = props

    const codeChange = useCallback(
        (code) => {
        onChange(PatchEvent.from(code ? set(code) : unset()));
    }, [onChange]);

  return (
  <FormField
  description={type.description}  // Creates description from schema
  title={type.title}              // Creates label from schema title
  __unstable_markers={markers}    // Handles all markers including validation
  __unstable_presence={presence}  // Handles presence avatars
  compareValue={compareValue}     // Handles "edited" status
  >
    <AceEditor
      mode="javascript"
      name="ace-editor-code"
      width="100%"
      theme="github"
      styles={{
        boxShadow:"0 0 0 1px #cad1dc",
        lineHeight: 1.6,
      }}
      value={value}
      tabSize={2}
      setOptions={{ useWorker: false}}
      ref={ref}
      //이벤트가 들어오는 것이 아니라, 값이 들어옮으로 
      //위에서 명시 해줘야 한다.
      onChange={codeChange}
      />
  </FormField>
  );
});

export default CodeInput;