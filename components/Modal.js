import React from 'react'

class Modal extends React.Component {

    constructor(props){
        super(props)

        this.closeButton= null

    }
    closeModal(){
        this.closeButton.click()
    }
    submitModal = ()=>{
        alert('submiting Modal')
        this.closeModal()
    }

    render(){
        return (
            <>
                    <button 
                        type="button" 
                        className="btn btn-primary" 
                        data-bs-toggle="modal" 
                        data-bs-target="#staticBackdrop"
                        onClick={()=> $('#staticBackdrop').modal('show')}
                        >
                   Create Movie
                    </button>
    
                    <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="staticBackdropLabel">Modal title</h5>
                            <button 
                                type="button" 
                                className="btn-close" 
                                data-bs-dismiss="modal" 
                                aria-label="Close"
                        ></button>
                        </div>
                        <div className="modal-body">
                        {this.props.children}
                            
                        </div>
                        <div className="modal-footer">
                            <button ref={(e) => this.closeButton = e} type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={()=> $('#staticBackdrop').modal('hide')}>Close</button>
                            {this.props.hasSubmit &&
                                <button onClick={submitModal} type="button" className="btn btn-primary">Understood</button>
                            }
                        </div>
                        </div>
                    </div>
                    </div>
            </>
        )
    }
    }
    

export default Modal








// import React from 'react'

// const Modal = (props) => {
//     let closeButton= null

//     const submitModal = ()=>{
//         alert('submiting Modal')
//         closeButton.click()
//     }
//     return (
//         <>
//                 <button 
//                     type="button" 
//                     className="btn btn-primary" 
//                     data-bs-toggle="modal" 
//                     data-bs-target="#staticBackdrop"
//                     onClick={()=> $('#staticBackdrop').modal('show')}
//                     >
//                Create Movie
//                 </button>

//                 <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
//                 <div className="modal-dialog">
//                     <div className="modal-content">
//                     <div className="modal-header">
//                         <h5 className="modal-title" id="staticBackdropLabel">Modal title</h5>
//                         <button 
//                             type="button" 
//                             className="btn-close" 
//                             data-bs-dismiss="modal" 
//                             aria-label="Close"
//                     ></button>
//                     </div>
//                     <div className="modal-body">
//                     {props.children}
                        
//                     </div>
//                     <div className="modal-footer">
//                         <button ref={(e) => closeButton = e} type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={()=> $('#staticBackdrop').modal('hide')}>Close</button>
//                         {props.hasSubmit &&
//                             <button onClick={submitModal} type="button" className="btn btn-primary">Understood</button>
//                         }
//                     </div>
//                     </div>
//                 </div>
//                 </div>
//         </>
//     )
// }

// export default Modal
