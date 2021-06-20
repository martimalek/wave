(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{I9tc:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return b})),n.d(t,"default",(function(){return h}));n("5hJT"),n("W1QL"),n("K/PF"),n("t91x"),n("75LO"),n("PJhk");var a=n("/FXl"),o=n("TjRS"),r=n("ZFoC"),i=n("JvCO"),s=n("KXFl"),l=n("xnqT"),p=n("/VS8"),u=n("UiWp");n("aD51");function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var b={};void 0!==b&&b&&b===Object(b)&&Object.isExtensible(b)&&!b.hasOwnProperty("__filemeta")&&Object.defineProperty(b,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"src/components/Input/docs/Input.mdx"}});var d={_frontmatter:b},m=o.a;function h(e){var t,n=e.components,h=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,["components"]);return Object(a.b)(m,c({},d,h,{components:n,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"input"},"Input"),Object(a.b)("p",null,"Inputs are mainly used in forms to introduce alphanumeric content and edit it."),Object(a.b)("h2",{id:"properties"},"Properties"),Object(a.b)(u.a,{mdxType:"InputPropsTable"}),Object(a.b)("br",null),Object(a.b)(l.a,{component:"Input",supportedProps:["margin","width"],mdxType:"StyledSystemLinks"}),Object(a.b)("p",null,"Additionally, all native HTML input element props are supported and forwarded to the underlying input element."),Object(a.b)("h2",{id:"example"},"Example"),Object(a.b)(r.b,{__position:1,__code:'<ControlledInput\n  variant="boxed"\n  placeholder="user@free-now.com"\n  label="E-Mail Address"\n  id="email"\n/>',__scope:(t={props:h,DefaultLayout:o.a,Playground:r.b,Input:i.a,ControlledInput:s.a,StyledSystemLinks:l.a,Combination:p.a,InputPropsTable:u.a},t.DefaultLayout=o.a,t._frontmatter=b,t),mdxType:"Playground"},Object(a.b)(s.a,{variant:"boxed",placeholder:"user@free-now.com",label:"E-Mail Address",id:"email",mdxType:"ControlledInput"})),Object(a.b)("h2",{id:"testing"},"Testing"),Object(a.b)("pre",null,Object(a.b)("code",c({parentName:"pre"},{className:"language-ts"}),"import { render, screen } from '@testing-library/react';\nimport userEvent from '@testing-library/user-event';\nimport * as React from 'react';\nimport { Input } from './Input';\n\ntest('allows to be tested using accessible queries', () => {\n    const spySubmit = jest.fn();\n    const onSubmit = e => {\n        e.preventDefault();\n        const formData = new FormData(e.currentTarget);\n        spySubmit({ username: formData.get('username-name'), password: formData.get('password-name') });\n    };\n\n    render(\n        <form onSubmit={onSubmit}>\n            <Input id=\"username-id\" name=\"username-name\" label=\"username\" />\n            <Input id=\"password-id\" type=\"password\" name=\"password-name\" label=\"password\" />\n            <button type=\"submit\">Submit</button>\n        </form>\n    );\n\n    const usernameInput = screen.getByRole('textbox', { name: 'username' });\n    const passwordInput = screen.getByLabelText(/password/i);\n    const submitBtn = screen.getByRole('button', { name: /submit/i });\n\n    userEvent.type(usernameInput, 'jaimito');\n    userEvent.type(passwordInput, 'tontoelquelolea');\n    userEvent.click(submitBtn);\n\n    expect(spySubmit).toHaveBeenCalledWith({ username: 'jaimito', password: 'tontoelquelolea' });\n    // Because input type password doesn't have implicit roles (type is passing as prop as expected) https://www.w3.org/TR/html-aria/#docconformance\n    expect(screen.queryByRole('textbox', { name: 'password' })).not.toBeInTheDocument();\n});\n")),Object(a.b)("h2",{id:"design"},"Design"),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Boxes"),": When they appear in places like forms, where many text fields are placed together, their reduced emphasis helps simplify the layout."),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Bottom lined"),": Labels are aligned with the input line and always visible. They can be resting (when a field is inactive and empty) or floating."),Object(a.b)("p",null,"Both types provide the same functionality. Choose the type that:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Works best with your tool visual style"),Object(a.b)("li",{parentName:"ul"},"Works better with the type of users (not advanced users tend to prefer the outlined inputs)"),Object(a.b)("li",{parentName:"ul"},"Best accommodates the IU goals (for searching maybe is easy to have an input line to differentiate from the rest of inputs)")),Object(a.b)("h3",{id:"appearance"},"Appearance"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"All the inputs should have a label"),Object(a.b)("li",{parentName:"ul"},"Length: Its recommended to choose it accordingly to the content (e.g. small width for phone number and long width for surnames)"),Object(a.b)("li",{parentName:"ul"},"Icons: Sometimes inputs can include icons on the right. The icons can:\nTrigger a custom function (for example a date picker)"),Object(a.b)("li",{parentName:"ul"},"They can just be included to facilitate the content recognitions to the user (eg: in an ID input in a login form include a user icon)"),Object(a.b)("li",{parentName:"ul"},"Placeholders: We include placeholder or not  if we think the user could need some instructions (eg: data format as dates or email addresses)"),Object(a.b)("li",{parentName:"ul"},"Helper text: This information can appear after an error occurs or can be shown as an additional information for filling out the input when the placeholder is informing about format or the message is very long (eg: password requirements)"),Object(a.b)("li",{parentName:"ul"},"Mandatory/Optional indicators: To indicate that an input is mandatory, display an asterisk  next to the label text just in the case that few inputs are mandatory.  Although, when most of the fields are required, indicate optional fields by displaying the word “optional” in parentheses next to the label text")),Object(a.b)("h3",{id:"placement"},"Placement"),Object(a.b)("p",null,"They mainly appear in forms but can also appear in other places, like dialog boxes and search.\nIdeally the inputs should be placed in one column, in order to provide an easy reading for the users, so always use one input by row. Although is possible to add 2 columns in case of 2 inputs are related as in the case of country code and phone number"),Object(a.b)("h3",{id:"behavior"},"Behavior"),Object(a.b)("h4",{id:"states"},"States"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"Default"),": We show the input lines or borders and the label in grey."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"Focused"),": When the pointer is inside the field the border will turn blue.",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"In some cases as long inputs like search we will show at this state a cross icon on the ride in order to delete the content written. In case of password, we show an eye icon to show the by default hidden content"),Object(a.b)("li",{parentName:"ul"},"When the input just allows to include numeric data: Don’t allow to type letters and when user does it, show a tooltip saying ‘Just numbers’. When the user is in the mobile, show by default the numeric virtual keyboard."),Object(a.b)("li",{parentName:"ul"},"Placeholder text rests in the input field until the user starts entering text. It may contain an action or an example, such as a phone number or email address."))),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"In line Error"),": When a field is active or contains an error, the line’s color and label turns to red and an error text appears replacing the helper text when applicable (also in red color).",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"Manage multiple errors: If only one error is possible, text describes how to avoid it. If multiple errors are possible, the text describes how to avoid the most likely error."),Object(a.b)("li",{parentName:"ul"},"Mandatory errors: Don’t show errors when a field is mandatory until user click/tap on the action button in the form to save/send changes."))),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"Disable"),": when the user cannot make any action with the input. It’s recommended to show a tooltip when user is focused on the input explaining the reasons.")),Object(a.b)("h2",{id:"combinations"},"Combinations"),Object(a.b)(p.a,{variant:["boxed","bottom-lined"],size:["medium","small"],disabled:[!1,!0],inverted:[!1,!0],error:[!1,!0],mdxType:"Combination"},(function(e,t){return Object(a.b)(i.a,c({key:t},e,{label:"Label",value:"User entry",mdxType:"Input"}))})))}void 0!==h&&h&&h===Object(h)&&Object.isExtensible(h)&&!h.hasOwnProperty("__filemeta")&&Object.defineProperty(h,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"src/components/Input/docs/Input.mdx"}}),h.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-components-input-docs-input-mdx-2159205ea9a397bcf323.js.map