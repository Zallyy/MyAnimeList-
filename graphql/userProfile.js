export const queryUserProfile = `query($name: String){
    User(name: $name) {
        avatar {
            large
        }
        bannerImage
    }
}`
