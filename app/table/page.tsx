import { getAllUsers } from "../actions/actions";
import DeleteButton from "../components/delete-button";
import { UserDialog } from "../components/user-dialog";
import { UserEditDialog } from "../components/user-edit-dialog";

export default async function TablePage() {
  const user = await getAllUsers();

  return (
    <>
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">User Data</h1>
        <table className="table-auto w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 px-4 py-2 text-black">
                ID
              </th>
              <th className="border border-gray-300 px-4 py-2 text-black">
                Name
              </th>
              <th className="border border-gray-300 px-4 py-2 text-black">
                Email
              </th>
              <th className="border border-gray-300 px-4 py-2 text-black">
                Phone Number
              </th>
              <th className="border border-gray-300 px-4 py-2 text-black">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {user.map((person) => (
              <tr key={person.id} className="hover:bg-gray-300">
                <td className="border border-gray-300 px-4 py-2">
                  {person.id}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {person.name}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {person.email}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {person.phoneNumber || "N/A"}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  <div className="flex items-center gap-5">
                    <DeleteButton userId={person.id} />
                    <UserEditDialog user={person} />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="mt-5 flex justify-end">
          <UserDialog />
        </div>
      </div>
    </>
  );
}
