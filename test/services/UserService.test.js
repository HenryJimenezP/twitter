const UserService = require('../../app/services/UserService')

describe("Tests for UserService", () => {
    test("1. Create a new user using the UserService", () => {
        const user = UserService.create(1, "henryjimenez", "Henry")
        expect(user.username).toBe("henryjimenez")
        expect(user.name).toBe("Henry")
        expect(user.id).toBe(1)
        expect(user.bio).not.toBeUndefined()
    })
    test("2. Get all user data in a list", () => {
        const user = UserService.create(1, "henryjimenez", "Henry")
        const userInfoInList = UserService.getInfo(user)
        expect(userInfoInList[0]).toBe(1)
        expect(userInfoInList[1]).toBe("henryjimenez")
        expect(userInfoInList[2]).toBe("Henry")
        expect(userInfoInList[3]).toBe("Sin Bio")
    })
    test("3. Update username", () => {
        const user = UserService.create(1, "henryjimenez", "Henry")
        UserService.updateUserUsername(user, "henryjp")
        expect(user.username).toBe("henryjp")
    })
    test("4. Given a list of users give me the list of usernames", () => {
        const user1 = UserService.create(1, "henryjimenez1", "Henry")
        const user2 = UserService.create(1, "henryjimenez2", "Henry")
        const user3 = UserService.create(1, "henryjimenez3", "Henry")
        const usernames = UserService.getAllUsernames([user1, user2, user3])
        expect(usernames).toContain("henryjimenez1")
        expect(usernames).toContain("henryjimenez2")
        expect(usernames).toContain("henryjimenez3")
    })
})