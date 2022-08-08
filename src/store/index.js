import { createStore } from 'vuex'

export default createStore({
    state: {
        products: null,
        singleProduct: null,
        allUsers: null,
        user:null,
    },
    getters: {
        
    },
    mutations: {
        setProducts (state, products){
            state.products = products;
        },
        setSingleProduct (state, singleProduct){
            state.singleProduct = singleProduct;
        },
        setUser (state, user){
            state.user = user;
        },
        setAllUsers(state,users){
            state.allUsers = users;
        },
        clearSingleProduct(state){
            state.singleProduct = null
        }
    },
    actions: {
        async getProducts(context){
            fetch('http://localhost:3000/products')
            .then((res)=> res.json())
            .then((data)=> context.commit('setProducts',data.results))
        },
        async getSingleProduct(context,payload){
            fetch('http://localhost:3000/products/' + payload)
            .then((res)=> res.json())
            .then((data)=> context.commit('setSingleProduct',data.results[0]))
        },
        async registerUser(context,payload){
            fetch('http://localhost:3000/users', {
                method: 'POST',
                body: JSON.stringify(payload),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                }
            })
            .then((res) => res.json())
            .then((data) => console.log(data.results))
        },
        async loginUser(context,payload){
            fetch('http://localhost:3000/users', {
                method:'PATCH',
                body: JSON.stringify(payload),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8'
                }
            })
            .then((res) => res.json())
            .then((data) => context.commit('setUser',data.token));
        },
        async getUserInfo(context){
            fetch('http://localhost:3000/verify', {
                method: 'GET',
                headers:{
                    'Content-type': 'application/json; charset=UTF-8',
                    'x-auth-token': context.state.user
                }
            })
            .then((res)=> res.json())
            .then((data)=> console.log(data.token.user))
        },
        async getAllUsers(context){
            fetch('http://localhost:3000/users')
            .then((res)=> res.json())
            .then((data)=> context.commit('setAllUsers',data.results));
        },
        async editProduct(context,payload){
            fetch('http://localhost:3000/products/'+payload.id, {
                method:'PUT',
                body: JSON.stringify(payload),
                headers:{
                    'Content-type': 'application/json; charset=UTF-8'
                }
            })
            .then((res)=> res.json())
            .then((data)=> console.log(data.message));
        },
        async deleteProduct(context,payload){
            fetch('http://localhost:3000/products/'+payload, {
                method:'DELETE'
            })
            .then((res)=> res.json())
            .then((data)=> console.log(data.results))
        },
        clearSingleProduct(context){
            context.commit('clearSingleProduct')
        }
    },

    modules: {

    }
})