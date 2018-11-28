import Promise from 'bluebird';
import axios from 'axios';

const self = this;
const serverPath = '';

export const loadTree = treeObj => {
    return axios.post(serverPath + '/bellwoods/trees/load', {
        params: treeObj
    });
};

export const addTree = payload => {
    console.log('addTree');
    return axios.post(serverPath + '/bellwoods/trees/create', {
        params: payload
    });
};

export const deleteTree = treeObj => {
    return axios.post(serverPath + '/bellwoods/trees/delete', {
        params: treeObj
    });
};

export const sayHi = treeObj => {
    return axios.post(serverPath + '/bellwoods/trees/sayHi', {
        params: treeObj
    });
};

export const updateCategory = treeObj => {
    return axios.post(serverPath + '/bellwoods/trees/update/category', {
        params: treeObj
    });
};

export const updateTree = treeObj => {
    return axios.post(serverPath + '/bellwoods/trees/update', {
        params: treeObj
    });
};

export const updateTreePosition = treeObj => {
    return axios.post(serverPath + '/bellwoods/trees/update/position', {
        params: treeObj
    });
};

export const updateTreePositions = data => {
    return axios.post(serverPath + '/bellwoods/trees/update/positions', {
        params: data
    });
};

export const updateBranches = treeObj => {
    return axios.post(serverPath + '/bellwoods/trees/update/branches', {
        params: treeObj
    });
};

export const updateTreeLatestImage = branchUpdateObj => {
    return axios.post(serverPath + '/bellwoods/trees/update/visit', {
        params: branchUpdateObj
    });
};

export const getTreesById = treeObj => {
    return axios.post(serverPath + '/bellwoods/trees/getTreesById', {
        params: treeObj
    });
};

export const updateTreeVisit = treeObj => {
    return axios.post(serverPath + '/bellwoods/trees/update/visit', {
        params: treeObj
    });
};

export const getTour = () => {
    return axios.get(serverPath + '/bellwoods/tour/:id');
};

export const getSummary = () => {
    return axios.post(serverPath + '/bellwoods/trees/summary', {
        params: { total: totalNum }
    });
};
