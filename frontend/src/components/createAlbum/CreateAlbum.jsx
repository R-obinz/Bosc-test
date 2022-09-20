import { useState } from "react";
import { motion } from "framer-motion"
import BackdropLanding from "../../components/backdrop/Backdrop"
import CloseIcon from '@mui/icons-material/Close';
import { ToastContainer, toast } from 'react-toastify';
import axios from '../../AxiosInstance'
import { useForm } from 'react-hook-form'
import { Grid } from '@mui/material'
import noImage from '../../Assets/Big No Image.png'
import _ from "lodash"
import './createAlbum.css'

const dropIn = {
    hidden: {
        y: "-50vh",
        opacity: 0
    },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.1,
            type: "spring",
            damping: 25,
            stiffness: 500
        }
    },
    exit: {
        y: "3vh",
        opacity: 0
    }
}

function CreateAlbum({ handleClose }) {
    const { register, handleSubmit } = useForm();
    const [image, setImage] = useState('')
    const [description, setDescription] = useState('')
    const generateError = (error) =>
        toast.error(error, {
            position: "bottom-right"
        })
    const generateSuccess = (success) =>
        toast.success(success, {
            position: "bottom-right"
        })


    const handlePost = async (data) => {
        const { description,photos } = data

        let formData = new FormData()
        if (description && image && photos ) {
            formData.append('image', image)
            formData.append('description', description)
            _.forEach( photos, file => {
                formData.append('photos', file)
            })
            try {
                const { data } = await axios({
                    method: 'post',
                    url: '/album',
                    data: formData,
                    headers: {
                        'token': localStorage.getItem("token"),
                        "Content-Type": "multipart/form-data"
                    }
                })
                if ( data.message === "Saved" ) {
                    generateSuccess("Post Created Successfully")
                    handleClose()
                } else {
                    generateError("Something went wrong!")
                }
            } catch (error) {
                generateError("Something went wrong!!")
            }
        } else {
            generateError('Please Fill All Fields')
        }
    }


    return (
        <BackdropLanding style={Backdropstyle} onClick={handleClose}>
            <motion.div
                // drag
                onClick={(e) => { e.stopPropagation() }}
                className="CreatePost-modal bg-white"
                variants={dropIn}
                initial="hidden"
                animate="visible"
                exit="exit"
            >
                <header className='CreatePost-header'>
                    <Grid container spacing={3} >
                        <Grid item xs={10}>
                            <h2 className="CreatePost-Heading">Create post</h2>
                        </Grid>
                        <Grid item xs={2}>
                            <CloseIcon className="CreatePost-Close-button" onClick={handleClose} />
                        </Grid>
                    </Grid>
                </header>
                <form onSubmit={handleSubmit(handlePost)}>
                    <Grid container spacing={3} >
                        <Grid item xs={12}>
                            <input
                                type="file"
                                name="image"
                                accept="image/*"
                                {...register('postImage')}
                                id="CreatePostImage"
                                style={{ display: 'none' }}
                                onChange={(e) => setImage(e.target.files[0])}
                            />
                            <label className="CreatePost-Image-Label" htmlFor="CreatePostImage">
                                {
                                    image ?
                                        <img src={URL.createObjectURL(image)} alt="postImage" className="CreatePost-Image" />
                                        :
                                        <img className="CreatePost-DefaultImage" src={noImage} alt="Post" />
                                }
                            </label>
                        </Grid>
                        <Grid item xs={12}>
                            <label htmlFor="contained-button-file" style={{ display: 'flex', justifyContent: 'space-between', marginTop: '10px' }}>
                                <input
                                    accept="image/*"
                                    id="contained-button-file"
                                    multiple
                                    type="file"
                                    {...register('photos')} />
                            </label>
                        </Grid>
                    </Grid>
                    <footer className="CreatePost-Footer">
                        <Grid container spacing={3} >
                            <Grid item xs={9}>
                                <input
                                    className="LoginLabel"
                                    type="text"
                                    name="Description"
                                    value={description}
                                    {...register('description')}
                                    placeholder='Write something here...'
                                    onChange={(e) => setDescription(e.target.value)}
                                />
                            </Grid>
                            <Grid item xs={2}>

                                <button className="btn" type="submit">Submit</button>
                            </Grid>

                        </Grid>
                    </footer>
                </form>
            </motion.div>
            <ToastContainer />
        </BackdropLanding>
    )
}

export default CreateAlbum

const Backdropstyle = {
    height: "700px"
}