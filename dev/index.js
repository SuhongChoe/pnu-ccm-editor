import React, { Component } from "react";
import { render } from "react-dom";
import AceEditor from "../src/ace";

import "ace-builds/src-noconflict/mode-jsx";
const languages = [
  "python",
  "java",
  "c_cpp"
];

const themes = [
  "monokai",
  "github",
  "tomorrow",
  "kuroir",
  "twilight",
  "xcode",
  "textmate",
  "solarized_dark",
  "solarized_light",
  "terminal"
];

const initValue = [
  `# -*- coding: utf-8 -*-
# UTF-8 encoding when using korean
user_input = input()
print("Hello CCM! Your input is " + user_input)`,
`import java.io.*;
class Main {
  public static void main(String[] args) throws Exception {
    BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
    String input = br.readLine();
    System.out.println("Hello CCM! Your input is " + input);
  }
}`,
`#include <iostream>
using namespace std;
int main() {
  char input[100];
  cin >> input;
  cout << "Hello CCM! Your input is " << input << endl;
  return 0;
}`
];

languages.forEach(lang => {
  require(`ace-builds/src-noconflict/mode-${lang}`);
  require(`ace-builds/src-noconflict/snippets/${lang}`);
});

themes.forEach(theme => require(`ace-builds/src-noconflict/theme-${theme}`));
/*eslint-disable no-alert, no-console */
import "ace-builds/src-min-noconflict/ext-searchbox";
import "ace-builds/src-min-noconflict/ext-language_tools";

class App extends Component {
  onLoad() {
    console.log("i've loaded");
  }
  onChange(newValue) {
    console.log("change", newValue);
    this.setState({
      value: newValue
    });
  }

  onSelectionChange(newValue, event) {
    console.log("select-change", newValue);
    console.log("select-change-event", event);
  }

  onCursorChange(newValue, event) {
    console.log("cursor-change", newValue);
    console.log("cursor-change-event", event);
  }

  onValidate(annotations) {
    console.log("onValidate", annotations);
  }

  setPlaceholder(e) {
    this.setState({
      placeholder: e.target.value
    });
  }
  setTheme(e) {
    this.setState({
      theme: e.target.value
    });
  }
  setMode(e) {
    var v = e.target.value
    this.setState({
      mode: v,
      value: v === 'python' ? initValue[0] : v === 'java' ? initValue[1] : initValue[2]
    });
  }
  setBoolean(name, value) {
    this.setState({
      [name]: value
    });
  }
  setFontSize(e) {
    this.setState({
      fontSize: parseInt(e.target.value, 10)
    });
  }

  constructor(props) {
    super(props);
    this.state = {
      value: initValue[0],
      placeholder: "Placeholder Text",
      theme: "monokai",
      mode: "python",
      enableBasicAutocompletion: true,
      enableLiveAutocompletion: true,
      fontSize: 14,
      showGutter: true,
      showPrintMargin: true,
      highlightActiveLine: true,
      enableSnippets: false,
      showLineNumbers: true
    };
    this.setPlaceholder = this.setPlaceholder.bind(this);
    this.setTheme = this.setTheme.bind(this);
    this.setMode = this.setMode.bind(this);
    this.onChange = this.onChange.bind(this);
    this.setFontSize = this.setFontSize.bind(this);
    this.setBoolean = this.setBoolean.bind(this);
  }
  render() {
    return (
      <div className="columns">
        <div className="column">
          <div className="field">
            <label>Mode:</label>
            <p className="control">
              <span className="select">
                <select
                  name="mode"
                  onChange={this.setMode}
                  value={this.state.mode}
                >
                  {languages.map(lang => (
                    <option key={lang} value={lang}>
                      {lang}
                    </option>
                  ))}
                </select>
              </span>
            </p>
          </div>

          <div className="field">
            <label>Theme:</label>
            <p className="control">
              <span className="select">
                <select
                  name="Theme"
                  onChange={this.setTheme}
                  value={this.state.theme}
                >
                  {themes.map(lang => (
                    <option key={lang} value={lang}>
                      {lang}
                    </option>
                  ))}
                </select>
              </span>
            </p>
          </div>

          <div className="field">
            <label>Font Size:</label>
            <p className="control">
              <span className="select">
                <select
                  name="Font Size"
                  onChange={this.setFontSize}
                  value={this.state.fontSize}
                >
                  {[14, 16, 18, 20, 24, 28, 32, 40].map(lang => (
                    <option key={lang} value={lang}>
                      {lang}
                    </option>
                  ))}
                </select>
              </span>
            </p>
          </div>

          <div className="field">
            <label>Placeholder:</label>
            <p className="control">
              <input
                className="input"
                type="text"
                onChange={this.setPlaceholder}
                value={this.state.placeholder}
              />
            </p>
          </div>

          <div className="field">
            <p className="control">
              <label className="checkbox">
                <input
                  type="checkbox"
                  checked={this.state.enableBasicAutocompletion}
                  onChange={e =>
                    this.setBoolean(
                      "enableBasicAutocompletion",
                      e.target.checked
                    )
                  }
                />
                Enable Basic Autocomplete
              </label>
            </p>
          </div>
          <div className="field">
            <p className="control">
              <label className="checkbox">
                <input
                  type="checkbox"
                  checked={this.state.enableLiveAutocompletion}
                  onChange={e =>
                    this.setBoolean(
                      "enableLiveAutocompletion",
                      e.target.checked
                    )
                  }
                />
                Enable Live Autocomplete
              </label>
            </p>
          </div>
          <div className="field">
            <p className="control">
              <label className="checkbox">
                <input
                  type="checkbox"
                  checked={this.state.showGutter}
                  onChange={e =>
                    this.setBoolean("showGutter", e.target.checked)
                  }
                />
                Show Gutter
              </label>
            </p>
          </div>
          <div className="field">
            <p className="control">
              <label className="checkbox">
                <input
                  type="checkbox"
                  checked={this.state.showPrintMargin}
                  onChange={e =>
                    this.setBoolean("showPrintMargin", e.target.checked)
                  }
                />
                Show Print Margin
              </label>
            </p>
          </div>
          <div className="field">
            <p className="control">
              <label className="checkbox">
                <input
                  type="checkbox"
                  checked={this.state.highlightActiveLine}
                  onChange={e =>
                    this.setBoolean("highlightActiveLine", e.target.checked)
                  }
                />
                Highlight Active Line
              </label>
            </p>
          </div>
          <div className="field">
            <p className="control">
              <label className="checkbox">
                <input
                  type="checkbox"
                  checked={this.state.enableSnippets}
                  onChange={e =>
                    this.setBoolean("enableSnippets", e.target.checked)
                  }
                />
                Enable Snippets
              </label>
            </p>
          </div>
          <div className="field">
            <p className="control">
              <label className="checkbox">
                <input
                  type="checkbox"
                  checked={this.state.showLineNumbers}
                  onChange={e =>
                    this.setBoolean("showLineNumbers", e.target.checked)
                  }
                />
                Show Line Numbers
              </label>
            </p>
          </div>
        </div>
        <div className="examples column">
          <h2>Editor</h2>
          <AceEditor
            placeholder={this.state.placeholder}
            mode={this.state.mode}
            theme={this.state.theme}
            name="editor"
            onLoad={this.onLoad}
            onChange={this.onChange}
            onSelectionChange={this.onSelectionChange}
            onCursorChange={this.onCursorChange}
            onValidate={this.onValidate}
            value={this.state.value}
            fontSize={this.state.fontSize}
            showPrintMargin={this.state.showPrintMargin}
            showGutter={this.state.showGutter}
            highlightActiveLine={this.state.highlightActiveLine}
            setOptions={{
              useWorker: false,
              enableBasicAutocompletion: this.state.enableBasicAutocompletion,
              enableLiveAutocompletion: this.state.enableLiveAutocompletion,
              enableSnippets: this.state.enableSnippets,
              showLineNumbers: this.state.showLineNumbers,
              tabSize: 2
            }}
          />
        </div>
        
        <div className="column">
          <h2>Code</h2>
          <AceEditor
            mode="jsx"
            theme="monokai"
            readOnly={true}
            value={`<AceEditor
  placeholder="${this.state.placeholder}"
  mode="${this.state.mode}"
  theme="${this.state.theme}"
  name="editor"
  onLoad={this.onLoad}
  onChange={this.onChange}
  fontSize={${this.state.fontSize}}
  showPrintMargin={${this.state.showPrintMargin}}
  showGutter={${this.state.showGutter}}
  highlightActiveLine={${this.state.highlightActiveLine}}
  value={\`${this.state.value}\`}
  setOptions={{
  enableBasicAutocompletion: ${this.state.enableBasicAutocompletion},
  enableLiveAutocompletion: ${this.state.enableLiveAutocompletion},
  enableSnippets: ${this.state.enableSnippets},
  showLineNumbers: ${this.state.showLineNumbers},
  tabSize: 2,
  }}/>
            `}
          />
        </div>
      </div>
    );
  }
}

render(<App />, document.getElementById("example"));
