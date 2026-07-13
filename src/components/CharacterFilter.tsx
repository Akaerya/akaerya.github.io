import fireIcon from "@assets/elements/IconAttributeFire.webp";
import iceIcon from "@assets/elements/IconAttributeIce.webp";
import imaginaryIcon from "@assets/elements/IconAttributeImaginary.webp";
import physicalIcon from "@assets/elements/IconAttributePhysical.webp";
import quantumIcon from "@assets/elements/IconAttributeQuantum.webp";
import thunderIcon from "@assets/elements/IconAttributeThunder.webp";
import windIcon from "@assets/elements/IconAttributeWind.webp";
import elationIcon from "@assets/paths/IconProfessionJoySmall.webp";
import preservationIcon from "@assets/paths/IconProfessionKnightSmall.webp";
import eruditionIcon from "@assets/paths/IconProfessionMageSmall.webp";
import remembranceIcon from "@assets/paths/IconProfessionMemorySmall.webp";
import abundanceIcon from "@assets/paths/IconProfessionPirestSmall.webp";
import huntIcon from "@assets/paths/IconProfessionRogueSmall.webp";
import harmonyIcon from "@assets/paths/IconProfessionShamanSmall.webp";
import nihilityIcon from "@assets/paths/IconProfessionWarlockSmall.webp";
import destructionIcon from "@assets/paths/IconProfessionWarriorSmall.webp";
import type { Key } from "@heroui/react";
import {
	Card,
	SearchField,
	ToggleButton,
	ToggleButtonGroup,
} from "@heroui/react";
import { AsteriskIcon } from "lucide-react";
import { useState } from "react";

const ELEMENTS = [
	{ key: "Physical", label: "Physical", icon: physicalIcon },
	{ key: "Fire", label: "Fire", icon: fireIcon },
	{ key: "Ice", label: "Ice", icon: iceIcon },
	{ key: "Lightning", label: "Lightning", icon: thunderIcon },
	{ key: "Wind", label: "Wind", icon: windIcon },
	{ key: "Quantum", label: "Quantum", icon: quantumIcon },
	{ key: "Imaginary", label: "Imaginary", icon: imaginaryIcon },
];

const PATHS = [
	{ key: "Abundance", label: "Abundance", icon: abundanceIcon },
	{ key: "Destruction", label: "Destruction", icon: destructionIcon },
	{ key: "Elation", label: "Elation", icon: elationIcon },
	{ key: "Erudition", label: "Erudition", icon: eruditionIcon },
	{ key: "Harmony", label: "Harmony", icon: harmonyIcon },
	{ key: "The Hunt", label: "The Hunt", icon: huntIcon },
	{ key: "Nihility", label: "Nihility", icon: nihilityIcon },
	{ key: "Preservation", label: "Preservation", icon: preservationIcon },
	{ key: "Remembrance", label: "Remembrance", icon: remembranceIcon },
];

export type CharacterData = {
	id: number;
	name: string;
	element: string;
	path: string;
	cardImageUrl: string;
	elementIconUrl: string;
	stars: number;
	href: string;
};

interface Props {
	characters: CharacterData[];
}

export function CharacterFilter({ characters }: Props) {
	const [search, setSearch] = useState("");
	const [selectedElement, setSelectedElement] = useState<Key>("all");
	const [selectedPath, setSelectedPath] = useState<Key>("all");
	const [selectedRarity, setSelectedRarity] = useState<Key>("all");

	function handleElementChange(keys: Set<Key>) {
		const key = [...keys][0] ?? "all";
		setSelectedElement(key);
	}

	function handlePathChange(keys: Set<Key>) {
		const key = [...keys][0] ?? "all";
		setSelectedPath(key);
	}

	function handleRarityChange(keys: Set<Key>) {
		const key = [...keys][0] ?? "all";
		setSelectedRarity(key);
	}

	const filtered = characters.filter((c) => {
		if (search && !c.name.toLowerCase().includes(search.toLowerCase()))
			return false;
		if (selectedElement !== "all" && c.element !== selectedElement)
			return false;
		if (selectedPath !== "all" && c.path !== selectedPath) return false;
		if (selectedRarity !== "all" && c.stars.toString() !== selectedRarity)
			return false;
		return true;
	});

	return (
		<div className="flex flex-col gap-6">
			{/* Search */}
			<SearchField
				aria-label="Search characters"
				value={search}
				onChange={setSearch}
			>
				<SearchField.Group>
					<SearchField.SearchIcon />
					<SearchField.Input
						placeholder="Search characters..."
						className="w-full"
					/>
					<SearchField.ClearButton />
				</SearchField.Group>
			</SearchField>

			{/* Filters */}
			<div className="flex flex-wrap gap-x-6 gap-y-4">
				{/* Element filter */}
				<div className="flex flex-col gap-2">
					<span className="font-medium text-foreground/50 text-xs uppercase tracking-widest">
						Element
					</span>
					<ToggleButtonGroup
						isDetached
						selectionMode="single"
						selectedKeys={new Set([selectedElement])}
						onSelectionChange={handleElementChange}
						size="lg"
						className="flex flex-wrap justify-start gap-2"
					>
						<ToggleButton
							key="all"
							id="all"
							isIconOnly
							aria-label="All elements"
						>
							<AsteriskIcon className="size-6" />
						</ToggleButton>
						{ELEMENTS.map((el) => (
							<ToggleButton
								key={el.key}
								id={el.key}
								isIconOnly
								aria-label={el.label}
							>
								<img src={el.icon.src} alt={el.label} className="size-6" />
							</ToggleButton>
						))}
					</ToggleButtonGroup>
				</div>

				{/* Path filter */}
				<div className="flex flex-col gap-2">
					<span className="font-medium text-foreground/50 text-xs uppercase tracking-widest">
						Path
					</span>
					<ToggleButtonGroup
						isDetached
						selectionMode="single"
						selectedKeys={new Set([selectedPath])}
						onSelectionChange={handlePathChange}
						size="lg"
						className="flex flex-wrap justify-start gap-2"
					>
						<ToggleButton key="all" id="all" isIconOnly aria-label="All paths">
							<AsteriskIcon className="size-6" />
						</ToggleButton>
						{PATHS.map((path) => (
							<ToggleButton
								key={path.key}
								id={path.key}
								isIconOnly
								aria-label={path.label}
							>
								<img
									src={path.icon.src}
									alt={path.label}
									className="size-5 invert dark:invert-0"
								/>
							</ToggleButton>
						))}
					</ToggleButtonGroup>
				</div>

				{/* Rarity filter */}
				<div className="flex flex-col gap-2">
					<span className="font-medium text-foreground/50 text-xs uppercase tracking-widest">
						Rarity
					</span>
					<ToggleButtonGroup
						isDetached
						selectionMode="single"
						selectedKeys={new Set([selectedRarity])}
						onSelectionChange={handleRarityChange}
						size="lg"
					>
						<ToggleButton
							key="all"
							id="all"
							isIconOnly
							aria-label="All rarities"
						>
							<AsteriskIcon className="size-6" />
						</ToggleButton>
						<ToggleButton
							key="4"
							id="4"
							aria-label="4 Stars"
							className="font-semibold"
						>
							4★
						</ToggleButton>
						<ToggleButton
							key="5"
							id="5"
							aria-label="5 Stars"
							className="font-semibold"
						>
							5★
						</ToggleButton>
					</ToggleButtonGroup>
				</div>
			</div>

			{/* Character grid */}
			<div className="grid w-full grid-cols-[repeat(auto-fill,minmax(160px,1fr))] gap-5">
				{filtered.map((character) => (
					<a
						key={character.id}
						href={character.href}
						className="group outline-none"
					>
						<Card className="h-60 w-40 overflow-hidden border border-border/60 transition-transform group-hover:scale-[1.03] group-focus-visible:ring-2 group-focus-visible:ring-foreground">
							<img
								src={character.cardImageUrl}
								alt={character.name}
								className="absolute inset-0 h-full w-full object-cover"
							/>
							<Card.Header>
								<div className="absolute inset-0 flex h-8 w-12 items-center justify-center gap-x-2 rounded-br-lg bg-surface-secondary/60">
									<img
										src={character.elementIconUrl}
										alt={character.element}
										className="size-6"
									/>
								</div>
							</Card.Header>
							<Card.Footer className="z-10 mt-auto flex flex-col items-start font-bold font-heading">
								<span
									className={`${character.name.length > 14 ? "text-xl" : "text-2xl"}`}
								>
									{character.name}
								</span>
								<div className="flex w-full items-center justify-between font-body text-foreground/80 text-xs">
									<span>{character.path}</span>
									<span>{`${character.stars}★`}</span>
								</div>
							</Card.Footer>
						</Card>
					</a>
				))}
				{filtered.length === 0 && (
					<p className="col-span-full py-12 text-center text-foreground/50">
						No characters match the current filters.
					</p>
				)}
			</div>
		</div>
	);
}
