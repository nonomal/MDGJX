import{ab as a,m as c,G as o,j as e,C as d,a9 as m,T as l}from"./index-XsIMaQZM.js";import{u as h}from"./use-form-CzN1uOLz.js";function f(){const n=a.useSelector(i=>i.users.userInfo),r=h({initialValues:{name:"",email:(n==null?void 0:n.email)||"",subject:"",content:""},validate:{content:i=>i.trim().length==0}}),[t]=c.useLazySendFeedbackQuery({}),s=o();return e.jsx(d,{size:"sm",children:e.jsxs("form",{onSubmit:r.onSubmit(i=>{console.log("err",i),t(i).then(()=>{m.alertSuccess("感谢您的反馈！我们会尽快回复您！")})}),children:[e.jsxs(l,{order:2,size:"h1",style:{fontFamily:"Greycliff CF, var(--mantine-font-family)"},fw:900,ta:"center",children:[s.name,"(",s.version,")"]}),e.jsx(l,{order:3,size:"xl",style:{fontFamily:"Greycliff CF, var(--mantine-font-family)"},fw:900,ta:"center",mt:"sm",children:"如果您喜欢我们的开源软件，请考虑参与开源建设或者升级到专业版以支持我们！"}),e.jsxs("div",{className:"mt-10",children:[e.jsx(l,{order:5,children:"软件迭代历程"}),e.jsxs("ul",{className:"list-disc",children:[e.jsx("li",{children:"GUtils - 2020年1月"}),e.jsx("li",{children:"CodeGen工具箱 - 2022年3月"}),e.jsx("li",{children:"LafTools工具箱 - 2023年10月"}),e.jsx("li",{children:"秒达工具箱 - 2024年4月"}),e.jsx("li",{children:"..."})]})]}),e.jsxs("div",{className:"mt-10",children:[e.jsx(l,{order:5,children:"联系方式"}),e.jsxs("ul",{className:"list-disc",children:[e.jsxs("li",{children:["官方QQ群：",s.qqGroup]}),e.jsx("li",{children:"联系邮箱：work7z@outlook.com"}),e.jsxs("li",{children:["所有源代码: ",s.githubRepo]}),e.jsx("li",{children:"开发者Ryan的微信：lafting755"}),e.jsxs("li",{children:["哔哩哔哩账号：",e.jsx("a",{href:"https://space.bilibili.com/1343908691?spm_id_from=333.1007.0.0",children:"CodeGen工具箱(未来可能更名)"})]})]})]}),e.jsxs("div",{className:"mt-10",children:[e.jsx(l,{order:5,children:"编译信息"}),e.jsxs("ul",{className:"list-disc",children:[e.jsxs("li",{children:["版本号: ",s.version]}),e.jsxs("li",{children:["编译日期: ",s.releaseDate]}),e.jsxs("li",{children:["编译时间: ",new Date(parseInt(s.timestamp)*1e3).toString(),"(自动化部署)"]})]})]})]})})}export{f as default};