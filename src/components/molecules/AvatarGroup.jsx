export default function AvatarGroup({ avatars }) {
  return (
    <div className="flex items-center justify-center -space-x-2">
      {avatars.map((avatar) => (
        <img
          key={avatar.id}
          src={avatar.src}
          alt={avatar.alt}
          className={avatar.className}
        />
      ))}
    </div>
  );
}
