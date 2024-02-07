export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      dev_entries: {
        Row: {
          content_html: string | null
          content_text: string | null
          created_at: string | null
          emoji: string | null
          id: string
          index: number | null
          journal_id: string
          tags: string[] | null
          title: string | null
          updated_at: string | null
          user_id: string | null
        }
        Insert: {
          content_html?: string | null
          content_text?: string | null
          created_at?: string | null
          emoji?: string | null
          id?: string
          index?: number | null
          journal_id: string
          tags?: string[] | null
          title?: string | null
          updated_at?: string | null
          user_id?: string | null
        }
        Update: {
          content_html?: string | null
          content_text?: string | null
          created_at?: string | null
          emoji?: string | null
          id?: string
          index?: number | null
          journal_id?: string
          tags?: string[] | null
          title?: string | null
          updated_at?: string | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "dev_entries_journal_id_fkey"
            columns: ["journal_id"]
            isOneToOne: false
            referencedRelation: "dev_journals"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "dev_entries_journal_id_fkey"
            columns: ["journal_id"]
            isOneToOne: false
            referencedRelation: "dev_user_data"
            referencedColumns: ["journal_id"]
          },
          {
            foreignKeyName: "dev_entries_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "dev_users"
            referencedColumns: ["id"]
          }
        ]
      }
      dev_entry_trackers: {
        Row: {
          color: string | null
          entry_id: string
          id: string
          journal_tracker_id: string | null
          name: string | null
          options: Json[] | null
          tracker_type_id: number | null
          units: string | null
        }
        Insert: {
          color?: string | null
          entry_id: string
          id?: string
          journal_tracker_id?: string | null
          name?: string | null
          options?: Json[] | null
          tracker_type_id?: number | null
          units?: string | null
        }
        Update: {
          color?: string | null
          entry_id?: string
          id?: string
          journal_tracker_id?: string | null
          name?: string | null
          options?: Json[] | null
          tracker_type_id?: number | null
          units?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "dev_entry_trackers_entry_id_fkey"
            columns: ["entry_id"]
            isOneToOne: false
            referencedRelation: "dev_entries"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "dev_entry_trackers_entry_id_fkey"
            columns: ["entry_id"]
            isOneToOne: false
            referencedRelation: "dev_user_data"
            referencedColumns: ["entry_id"]
          },
          {
            foreignKeyName: "dev_entry_trackers_journal_tracker_id_fkey"
            columns: ["journal_tracker_id"]
            isOneToOne: false
            referencedRelation: "dev_journal_trackers"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "dev_entry_trackers_tracker_type_id_fkey"
            columns: ["tracker_type_id"]
            isOneToOne: false
            referencedRelation: "dev_tlkp_tracker_types"
            referencedColumns: ["id"]
          }
        ]
      }
      dev_journal_trackers: {
        Row: {
          color: string
          created_at: string | null
          id: string
          journal_id: string
          name: string
          options: Json[] | null
          tracker_type_id: number
          units: string | null
          updated_at: string | null
        }
        Insert: {
          color?: string
          created_at?: string | null
          id?: string
          journal_id: string
          name: string
          options?: Json[] | null
          tracker_type_id?: number
          units?: string | null
          updated_at?: string | null
        }
        Update: {
          color?: string
          created_at?: string | null
          id?: string
          journal_id?: string
          name?: string
          options?: Json[] | null
          tracker_type_id?: number
          units?: string | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "dev_journal_trackers_journal_id_fkey"
            columns: ["journal_id"]
            isOneToOne: false
            referencedRelation: "dev_journals"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "dev_journal_trackers_journal_id_fkey"
            columns: ["journal_id"]
            isOneToOne: false
            referencedRelation: "dev_user_data"
            referencedColumns: ["journal_id"]
          },
          {
            foreignKeyName: "dev_journal_trackers_tracker_type_id_fkey"
            columns: ["tracker_type_id"]
            isOneToOne: false
            referencedRelation: "dev_tlkp_tracker_types"
            referencedColumns: ["id"]
          }
        ]
      }
      dev_journals: {
        Row: {
          color: string | null
          created_at: string | null
          description: string | null
          id: string
          page_theme_id: string | null
          password: string | null
          protected: boolean
          title: string
          toggle_word_count: boolean
          updated_at: string | null
          user_id: string
        }
        Insert: {
          color?: string | null
          created_at?: string | null
          description?: string | null
          id?: string
          page_theme_id?: string | null
          password?: string | null
          protected?: boolean
          title?: string
          toggle_word_count?: boolean
          updated_at?: string | null
          user_id: string
        }
        Update: {
          color?: string | null
          created_at?: string | null
          description?: string | null
          id?: string
          page_theme_id?: string | null
          password?: string | null
          protected?: boolean
          title?: string
          toggle_word_count?: boolean
          updated_at?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "dev_journals_page_theme_id_fkey"
            columns: ["page_theme_id"]
            isOneToOne: false
            referencedRelation: "dev_page_themes"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "dev_journals_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "dev_users"
            referencedColumns: ["id"]
          }
        ]
      }
      dev_mailing: {
        Row: {
          active: boolean
          created_at: string | null
          email_address: string
          id: number
        }
        Insert: {
          active?: boolean
          created_at?: string | null
          email_address?: string
          id?: number
        }
        Update: {
          active?: boolean
          created_at?: string | null
          email_address?: string
          id?: number
        }
        Relationships: []
      }
      dev_page_themes: {
        Row: {
          created_at: string
          id: string
          page_type: Database["public"]["Enums"]["page_type"] | null
          theme_id: number
          updated_at: string
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          page_type?: Database["public"]["Enums"]["page_type"] | null
          theme_id: number
          updated_at?: string
          user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          page_type?: Database["public"]["Enums"]["page_type"] | null
          theme_id?: number
          updated_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "dev_page_themes_theme_id_fkey"
            columns: ["theme_id"]
            isOneToOne: false
            referencedRelation: "dev_themes"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "dev_page_themes_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "dev_users"
            referencedColumns: ["id"]
          }
        ]
      }
      dev_themes: {
        Row: {
          bg_accent: string
          bg_border: string
          bg_primary: string
          bg_secondary: string
          created_at: string
          id: number
          inherited_theme: boolean
          theme_name: string
          updated_at: string
          user_id: string
        }
        Insert: {
          bg_accent?: string
          bg_border?: string
          bg_primary?: string
          bg_secondary?: string
          created_at?: string
          id?: number
          inherited_theme?: boolean
          theme_name?: string
          updated_at?: string
          user_id?: string
        }
        Update: {
          bg_accent?: string
          bg_border?: string
          bg_primary?: string
          bg_secondary?: string
          created_at?: string
          id?: number
          inherited_theme?: boolean
          theme_name?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "dev_themes_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "dev_users"
            referencedColumns: ["id"]
          }
        ]
      }
      dev_tlkp_tracker_types: {
        Row: {
          description: string
          id: number
          index: number
          name: string
          options: Json | null
        }
        Insert: {
          description: string
          id?: number
          index?: number
          name: string
          options?: Json | null
        }
        Update: {
          description?: string
          id?: number
          index?: number
          name?: string
          options?: Json | null
        }
        Relationships: []
      }
      dev_users: {
        Row: {
          base_theme: number | null
          bio: string | null
          birthday: string | null
          created_at: string
          first_name: string | null
          id: string
          last_name: string | null
          logins: Json[] | null
          pin: number | null
          updated_at: string
          username: string | null
        }
        Insert: {
          base_theme?: number | null
          bio?: string | null
          birthday?: string | null
          created_at?: string
          first_name?: string | null
          id: string
          last_name?: string | null
          logins?: Json[] | null
          pin?: number | null
          updated_at?: string
          username?: string | null
        }
        Update: {
          base_theme?: number | null
          bio?: string | null
          birthday?: string | null
          created_at?: string
          first_name?: string | null
          id?: string
          last_name?: string | null
          logins?: Json[] | null
          pin?: number | null
          updated_at?: string
          username?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "dev_users_base_theme_fkey"
            columns: ["base_theme"]
            isOneToOne: false
            referencedRelation: "dev_themes"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "dev_users_id_fkey"
            columns: ["id"]
            isOneToOne: true
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      entries: {
        Row: {
          content_html: string | null
          content_text: string | null
          created_at: string | null
          emoji: string | null
          id: string
          index: number | null
          journal_id: string | null
          page_theme_id: string | null
          tags: string[] | null
          title: string
          updated_at: string | null
          user_id: string | null
        }
        Insert: {
          content_html?: string | null
          content_text?: string | null
          created_at?: string | null
          emoji?: string | null
          id?: string
          index?: number | null
          journal_id?: string | null
          page_theme_id?: string | null
          tags?: string[] | null
          title: string
          updated_at?: string | null
          user_id?: string | null
        }
        Update: {
          content_html?: string | null
          content_text?: string | null
          created_at?: string | null
          emoji?: string | null
          id?: string
          index?: number | null
          journal_id?: string | null
          page_theme_id?: string | null
          tags?: string[] | null
          title?: string
          updated_at?: string | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "entries_journal_id_fkey"
            columns: ["journal_id"]
            isOneToOne: false
            referencedRelation: "journals"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "entries_page_theme_id_fkey"
            columns: ["page_theme_id"]
            isOneToOne: false
            referencedRelation: "page_themes"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "entries_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      entry_trackers: {
        Row: {
          data: Json | null
          id: string
          journal_tracker_id: string | null
        }
        Insert: {
          data?: Json | null
          id?: string
          journal_tracker_id?: string | null
        }
        Update: {
          data?: Json | null
          id?: string
          journal_tracker_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "entry_trackers_journal_tracker_id_fkey"
            columns: ["journal_tracker_id"]
            isOneToOne: false
            referencedRelation: "journal_trackers"
            referencedColumns: ["id"]
          }
        ]
      }
      journal_trackers: {
        Row: {
          color: string
          created_at: string | null
          default_value: string | null
          id: string
          journal_id: string | null
          name: string
          tracker_units_id: number
          trackers_tlkp_id: number
          type: string
          updated_at: string | null
        }
        Insert: {
          color?: string
          created_at?: string | null
          default_value?: string | null
          id?: string
          journal_id?: string | null
          name?: string
          tracker_units_id: number
          trackers_tlkp_id: number
          type?: string
          updated_at?: string | null
        }
        Update: {
          color?: string
          created_at?: string | null
          default_value?: string | null
          id?: string
          journal_id?: string | null
          name?: string
          tracker_units_id?: number
          trackers_tlkp_id?: number
          type?: string
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "journal_trackers_journal_id_fkey"
            columns: ["journal_id"]
            isOneToOne: false
            referencedRelation: "journals"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "journal_trackers_tracker_units_id_fkey"
            columns: ["tracker_units_id"]
            isOneToOne: false
            referencedRelation: "tlkp_trackers_units"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "journal_trackers_trackers_tlkp_id_fkey"
            columns: ["trackers_tlkp_id"]
            isOneToOne: false
            referencedRelation: "tlkp_trackers"
            referencedColumns: ["id"]
          }
        ]
      }
      journals: {
        Row: {
          color: string | null
          created_at: string | null
          description: string | null
          id: string
          page_theme_id: string | null
          password: string | null
          protected: boolean
          title: string
          toggle_word_count: boolean
          updated_at: string | null
          user_id: string
        }
        Insert: {
          color?: string | null
          created_at?: string | null
          description?: string | null
          id?: string
          page_theme_id?: string | null
          password?: string | null
          protected?: boolean
          title?: string
          toggle_word_count?: boolean
          updated_at?: string | null
          user_id: string
        }
        Update: {
          color?: string | null
          created_at?: string | null
          description?: string | null
          id?: string
          page_theme_id?: string | null
          password?: string | null
          protected?: boolean
          title?: string
          toggle_word_count?: boolean
          updated_at?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "journals_page_theme_id_fkey"
            columns: ["page_theme_id"]
            isOneToOne: false
            referencedRelation: "page_themes"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "journals_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      mailing: {
        Row: {
          active: boolean
          created_at: string | null
          email_address: string
          id: number
        }
        Insert: {
          active?: boolean
          created_at?: string | null
          email_address?: string
          id?: number
        }
        Update: {
          active?: boolean
          created_at?: string | null
          email_address?: string
          id?: number
        }
        Relationships: []
      }
      page_themes: {
        Row: {
          created_at: string
          id: string
          page_type: Database["public"]["Enums"]["page_type"] | null
          theme_id: number
          updated_at: string
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          page_type?: Database["public"]["Enums"]["page_type"] | null
          theme_id: number
          updated_at?: string
          user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          page_type?: Database["public"]["Enums"]["page_type"] | null
          theme_id?: number
          updated_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "page_themes_theme_id_fkey"
            columns: ["theme_id"]
            isOneToOne: false
            referencedRelation: "themes"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "page_themes_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      themes: {
        Row: {
          bg_accent: string
          bg_border: string
          bg_primary: string
          bg_secondary: string
          created_at: string
          id: number
          inherited_theme: boolean
          theme_name: string
          updated_at: string
          user_id: string
        }
        Insert: {
          bg_accent?: string
          bg_border?: string
          bg_primary?: string
          bg_secondary?: string
          created_at?: string
          id?: number
          inherited_theme?: boolean
          theme_name?: string
          updated_at?: string
          user_id: string
        }
        Update: {
          bg_accent?: string
          bg_border?: string
          bg_primary?: string
          bg_secondary?: string
          created_at?: string
          id?: number
          inherited_theme?: boolean
          theme_name?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "themes_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      tlkp_trackers: {
        Row: {
          default_value: string
          id: number
          name: string
          suggestions: string[] | null
          type: string
        }
        Insert: {
          default_value?: string
          id?: number
          name?: string
          suggestions?: string[] | null
          type?: string
        }
        Update: {
          default_value?: string
          id?: number
          name?: string
          suggestions?: string[] | null
          type?: string
        }
        Relationships: []
      }
      tlkp_trackers_units: {
        Row: {
          id: number
          is_object: boolean | null
          object: Json[] | null
          string: string[] | null
          tracker_tlkp_id: number
        }
        Insert: {
          id?: number
          is_object?: boolean | null
          object?: Json[] | null
          string?: string[] | null
          tracker_tlkp_id: number
        }
        Update: {
          id?: number
          is_object?: boolean | null
          object?: Json[] | null
          string?: string[] | null
          tracker_tlkp_id?: number
        }
        Relationships: [
          {
            foreignKeyName: "tlkp_trackers_units_tracker_tlkp_id_fkey"
            columns: ["tracker_tlkp_id"]
            isOneToOne: false
            referencedRelation: "tlkp_trackers"
            referencedColumns: ["id"]
          }
        ]
      }
      users: {
        Row: {
          base_theme: number | null
          birthday: string | null
          first_name: string | null
          id: string
          last_name: string | null
          logins: Json[] | null
          username: string | null
        }
        Insert: {
          base_theme?: number | null
          birthday?: string | null
          first_name?: string | null
          id: string
          last_name?: string | null
          logins?: Json[] | null
          username?: string | null
        }
        Update: {
          base_theme?: number | null
          birthday?: string | null
          first_name?: string | null
          id?: string
          last_name?: string | null
          logins?: Json[] | null
          username?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "users_base_theme_fkey"
            columns: ["base_theme"]
            isOneToOne: false
            referencedRelation: "themes"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "users_id_fkey"
            columns: ["id"]
            isOneToOne: true
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
    }
    Views: {
      dev_user_data: {
        Row: {
          entry_content: string | null
          entry_id: string | null
          entry_title: string | null
          journal_id: string | null
          journal_title: string | null
          time_created: string | null
          user_id: string | null
        }
        Relationships: [
          {
            foreignKeyName: "dev_journals_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "dev_users"
            referencedColumns: ["id"]
          }
        ]
      }
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      page_type: "home" | "settings" | "journal" | "entry"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (Database["public"]["Tables"] & Database["public"]["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (Database["public"]["Tables"] &
      Database["public"]["Views"])
  ? (Database["public"]["Tables"] &
      Database["public"]["Views"])[PublicTableNameOrOptions] extends {
      Row: infer R
    }
    ? R
    : never
  : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof Database["public"]["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof Database["public"]["Tables"]
  ? Database["public"]["Tables"][PublicTableNameOrOptions] extends {
      Insert: infer I
    }
    ? I
    : never
  : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof Database["public"]["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof Database["public"]["Tables"]
  ? Database["public"]["Tables"][PublicTableNameOrOptions] extends {
      Update: infer U
    }
    ? U
    : never
  : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof Database["public"]["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof Database["public"]["Enums"]
  ? Database["public"]["Enums"][PublicEnumNameOrOptions]
  : never
