interface TeamCardProps {
  name: string;
  role: string;
  bio: string;
}

export function TeamCard({ name, role, bio }: TeamCardProps) {
  // Generate initials from name
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase();

  return (
    <div className="card-base flex flex-col items-center p-6 text-center transition-all duration-300 hover:shadow-cardHover">
      {/* Avatar Placeholder */}
      <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-navy text-2xl font-bold text-white">
        {initials}
      </div>
      <h3 className="text-h4">{name}</h3>
      <p className="mb-3 text-body-sm font-medium text-teal">{role}</p>
      <p className="text-body-sm text-charcoal">{bio}</p>
    </div>
  );
}