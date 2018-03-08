/**
 * 存储localStorage
 */
export const setStorage = (name, content) => {
    if(!name) return;
    if(typeof content !== 'string') {
        content = JSON.stringify(content);
    }
    window.localStorage.setItem(name, content)
};

/**
 * 删除localStorage
 */
export const removeStorage = name => {
    if(!name) return;
    window.localStorage.removeItem(name);
}

/**
 * 获取localStorage
 */
export const getStorage = name => {
    if(!name) return;
    return window.localStorage.getItem(name);
}