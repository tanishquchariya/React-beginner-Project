import React from 'react'

const Input = (props) => {
    return (
        <input type={props.type}
            placeholder={props.placeholder}
            value={props.value}
            checked={props.checked}
            onChange={props.onChange} />
    )
}
export default Input




// import React from 'react'

// const Input = ({
//     title,
//     setTitle,
//     description,
//     setDescription
// }) => {

//     return (
//         <div>

//             {/* Title Input */}
//             <input
//                 id="titleInput"
//                 type="text"
//                 placeholder="Write Title of Task"
//                 value={title}
//                 onChange={(event) => setTitle(event.target.value)}
//             />

//             {/* Description Input */}
//             <input
//                 id="descriptionInput"
//                 type="text"
//                 placeholder="Write Description of Task"
//                 value={description}
//                 onChange={(event) => setDescription(event.target.value)}
//             />

//         </div>
//     )
// }

// export default Input;