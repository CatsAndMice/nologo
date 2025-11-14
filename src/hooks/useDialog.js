import { shallowRef } from "vue"

export default () => {
    const showDialog = shallowRef(false)
    const openDialog = (e) => {
        e && e.preventDefault()
        showDialog.value = true
    }

    const closeDialog = () => {
        showDialog.value = false
    }

    return {
        showDialog,
        openDialog,
        closeDialog
    }
}