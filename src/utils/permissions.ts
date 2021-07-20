import { Ability, AbilityBuilder, AbilityClass } from "@casl/ability";

const userPermission = (user: any) => {
  type Action = "read" | "create" | "update" | "delete" | "manage";
  type Subject = "User" | "all";

  type AppAbilityType = Ability<[Action, Subject]>;
  const AppAbility = Ability as AbilityClass<AppAbilityType>;

  // TODO: DELETE THIS WHEN YOU CAN
  // eslint-disable-next-line no-unused-vars
  const { can, cannot, build } = new AbilityBuilder(AppAbility);

  // Define permissions

  if (user.role === "ROOT") {
    // Root user
  }

  return build();
};

export default userPermission;
