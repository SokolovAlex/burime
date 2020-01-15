class Storage {
    instanse: any = null

    constructor() {
        if (typeof window === 'undefined') {
            this.instanse = {
                getItem: () => {},
                setItem: () => {},
                removeItem: () => {},
            }
            return
        }
        this.instanse = window.localStorage
    }

    getItem(key: string) {
        const value = this.instanse.getItem(key)
        let result
        try {
            result = JSON.parse(value)
        } catch {
            result = value
        }
        return result
    }

    setItem(key: string, value: any) {
        this.instanse.setItem(key, JSON.stringify(value))
    }

    removeItem(key: string) {
        this.instanse.removeItem(key)
    }
}

export default new Storage()
