const User = require('./../../app/models/user')

describe("Unit Test for User class", () => {
    test('Create an User object', () => {
        const user = new User(1, "henryjimenez", "Henry", "Bio")

        expect(user.id).toBe(1)
        expect(user.username).toBe("henryjimenez")
        expect(user.name).toBe("Henry")
        expect(user.bio).toBe("Bio")
        expect(user.dateCreated).not.toBeUndefined()
        expect(user.lastUpdated).not.toBeUndefined()
    });
    test('Add getters', () => {
        const user = new User(1, "henryjimenez", "Henry", "Bio")

        expect(user.getUsername).toBe("henryjimenez")
        expect(user.getBio).toBe("Bio")
        expect(user.getDateCreated).not.toBeUndefined()
        expect(user.getLastUpdated).not.toBeUndefined()
    });
    test('Add setters', () => {
        const user = new User(1, "henryjimenez", "Henry", "Bio")

        user.setUsername = "Jimenez"
        expect(user.username).toBe("Jimenez")
        user.setBio = "New bio"
        expect(user.bio).toBe("New bio")

    });
})